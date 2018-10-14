#!/usr/bin/env python
import time
from envirophat import weather, leds
import datetime
from pymongo import MongoClient

client = MongoClient()

db = client.pithermo
collection = db.temp_surveys
temperature = weather.temperature()
post = {"temperature": temperature, "name": "chambre", "date": datetime.datetime.utcnow()}
post_id = collection.insert_one(post).inserted_id
post_id