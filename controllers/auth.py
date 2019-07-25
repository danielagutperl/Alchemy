# Import Blueprint so we can make a mini blueprint router for auth. Import jsonify so we can send error messages back. Import request from flask as well.
from flask import Blueprint, jsonify, request
from models.user import User, UserSchema

router = Blueprint(__name__, 'auth')
user_schema = UserSchema()

@router.route('/register', methods=['POST'])
def register():
    data = request.get_json()
     # gets the values from the client input and saves them in a variable called data
    user, errors = user_schema.load(data)
# does the data fit into the user_schema
    if errors:
        return jsonify(errors), 422
    # if fail ^^
    user.save()
    # if success and return the new user:
    return jsonify({'message': 'Thanks for registering'}), 201
# the generate token method will go in the user model and be called in the controller.

@router.route('/login', methods=['POST'])
def login():
    credentials = request.get_json()
    if not credentials:
        return jsonify({'message': 'You are not authorised!'}), 401
    user = User.query.filter_by(email=credentials['email']).first()

    if not user or not user.validate_password(credentials['password']):
        return jsonify({'message': 'Oops! You are not authorised!'}), 401

    return jsonify({'token': user.generate_token(), 'message': f'Welcome back {user.username}!'}), 200
