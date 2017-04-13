from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from bucketlist.config import Config
import os


app = Flask(__name__)
app.config.from_object(Config)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# if __name__ == '__main__':
#     app.run()
