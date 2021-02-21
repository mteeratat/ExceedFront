from flask import Flask, request
from flask_pymongo import PyMongo
from datetime import datetime
import pytz
from flask_cors import CORS, cross_origin
from bson.json_util import dumps
from random import randint

app = Flask(__name__)
cors = CORS(app, resources={r"/": {"origins": "*"}})
app.config['MONGO_URI'] = 'mongodb://exceed_group12:nhm88g6s@158.108.182.0:2255/exceed_group12'
mongo = PyMongo(app)

#cors = CORS(app, support_credentials=True)

doorsonCollections = mongo.db.data

@app.route('/check_in', methods=['POST'])
@cross_origin()
def check_in():
    #v = randint(1, 3)
    data = request.json
    now = datetime.now(pytz.timezone('Asia/Bangkok'))
    check_in_query = {
        "firstname" : data["firstname"],
        "lastname" : data["lastname"],
        "pplnum" : data["pplnum"],
        "tel" : data["tel"],
        "date" : now.strftime("%d/%b/%Y"),
        "time" : now.strftime('%H:%M:%S'),
        "hour" : now.strftime('%H'),
        "store" : "1"
    }
    doorsonCollections.insert(check_in_query)
    return {"result" : "Check-In Successfully"}

@app.route('/current', methods=['GET'])
@cross_origin()
def currentpop():
    hour = request.args.get('hour', -1)
    query = doorsonCollections.find();
    n = 0
    output = []
    for i in query:
        if i['hour'] == hour:
            n+=1

    return {"result" : n}


@app.route('/show_n', methods=['GET'])
@cross_origin()
def show_n():
    list_pplnum = list(doorsonCollections.aggregate([{
        "$group": {
            "_id": "null",
            "total_users" : {"$sum" : "$pplnum"}
        }}]))[0]
    list_pplnum.pop("_id")
    return dumps(list_pplnum)

@app.route('/check_out', methods=['PATCH'])
@cross_origin()
def check_out():
    data = request.json
    filt = {'firstname': data['firstname']}
    updated_content = {"$set": {'pplnum' : 0}}
    doorsonCollections.update_one(filt, updated_content)
    return {"result" : "Check-Out Successfully"}

@app.route('/show_admin', methods=['GET'])
@cross_origin()
def show_admin():
    query = doorsonCollections.find()
    output = []
    for element in query:
        output.append({
            "firstname" : element['firstname'],
            "lastname" : element['lastname'],
            "pplnum" : element['pplnum'],
            "time" : element['time'],
            "date" : element['date']
        })
    return {"result" : output}

@app.route('/show_users', methods=['GET'])
@cross_origin()
def show_users():
    query = doorsonCollections.find()
    output = []
    for element in query:
        # temp_string = element['firstname'][0:2] + ('x' * (len(element['firstname']) - 1))
        output.append({
            "firstname" : element['firstname'],
            "pplnum" : element['pplnum'],
            "time" : element['time'],
            "date" : element['date']
        })
    return {"result" : output}

@app.route('/data', methods=['GET'])
@cross_origin()
def getall():
    f_name = request.args.get('firstname', -1)
    l_name = request.args.get('lastname', -1)
    people = request.args.get('people', -1)
    phone_num = request.args.get('phone_num', -1)
    hour = request.args.get('hour', -1)
    store = request.args.get('store', -1)

    if f_name != -1:
        flit={'firstname': f_name}
        query = doorsonCollections.find(flit)
    elif l_name != -1:
        flit={'lastname': l_name}
        query = doorsonCollections.find(flit)
    elif people != -1:
        flit={'pplnum': people}
        query = doorsonCollections.find(flit)
    elif phone_num != -1:
        flit={'tel': phone_num}
        query = doorsonCollections.find(flit)
    elif hour != -1:
        flit={'hour': hour}
        query = doorsonCollections.find(flit)
    elif store != -1:
        flit={'store': store}
        query = doorsonCollections.find(flit)
    else:
        query = doorsonCollections.find()

    output = []
    for i in query:
        output.append({
            'firstname' : i['firstname'],
            'lastname' : i['lastname'],
            'pplnum' : i['pplnum'],
            'tel' : i['tel'],
            'hour' : i['hour'],
            'store' : i['store']
        })
    
    return {'result': output}

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='50004', debug=True) 
