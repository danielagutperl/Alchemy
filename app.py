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

# from models.drink import Drink, DrinkSchema
# this has to go after ma ^^
# drink_schema = DrinkSchema(many=True)
# TODO: I dont think I need this here any more..? If so ask what for.

# FOR TESTING:
# # @app.route('/')
# # def home():
# #     return 'Heya!', 200
#BECOMES THIS:
# @app.route('/drinks')
# def index():
#     # select all drinks and store in a variable:
#     drinks = Drink.query.all()
#     # bring back the jsonified (from ma) drink_schema with all the drinks from ^^ :
#     return drink_schema.jsonify(drinks), 200
#     # many=True, because by default it wont know to expect many (but it'll get many so will respond with 200 and an empty object)
#MOVED TO CONTROLLERS.drinks


from config import router
