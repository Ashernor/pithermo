import datetime
from pymongo import MongoClient

client = MongoClient()

db = client.pithermo
collection = db.temp_surveys

post = {"temperature": "12.2", "name": "chambre", "date": datetime.datetime.utcnow()}
post_id = collection.insert_one(post).inserted_id
post_id