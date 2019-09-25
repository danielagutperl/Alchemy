from flask import Flask
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from config.env import db_uri


app = Flask(__name__, static_folder='dist')
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)


from config import router
