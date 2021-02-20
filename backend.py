from flask import Flask, request
from flask_pymongo import PyMongo
from datetime import datetime
import pytz
from flask_cors import CORS, cross_origin
from bson.json_util import dumps

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://exceed_group12:nhm88g6s@158.108.182.0:2255/exceed_group12'
mongo = PyMongo(app)

cors = CORS(app, resource={r"/": {"origins": "*"}})

doorsonCollections = mongo.db.data
userCollection = mongo.db.user

@app.route('/regist', methods=['POST'])
@cross_origin()
def register():
    data = request.json

    regist_query = {
        "username" : data["username"],
        "password" : data["password"],
        "confirm_pass" : data["confirm_pass"]
    }
    userCollection.insert(regist_query)
    return {"result" : "Register Successfully"}

@app.route('/check_in', methods=['POST'])
@cross_origin()
def check_in():
    data = request.json
    now = datetime.now(pytz.timezone('Asia/Bangkok'))
    check_in_query = {
        "firstname" : data["firstname"],
        "lastname" : data["lastname"],
        "pplnum" : data["pplnum"],
        "tel" : data["tel"],
        "date" : now.strftime("%d/%b/%Y"),
        "time" : now.strftime('%H:%M:%S'),
        "hour" : now.strftime('%H')
    }
    doorsonCollections.insert(check_in_query)
    return {"result" : "Check-In Successfully"}


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


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='3001', debug=True)