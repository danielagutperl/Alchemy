from flask import Blueprint, jsonify, request
from models.user import User, UserSchema

router = Blueprint(__name__, 'auth')
user_schema = UserSchema()

@router.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user, errors = user_schema.load(data)

    if errors:
        return jsonify(errors), 422
    user.save()
    return jsonify({'message': 'Thanks for registering'}), 201


@router.route('/login', methods=['POST'])
def login():
    credentials = request.get_json()
    if not credentials:
        return jsonify({'message': 'please provide a correct email and password combination, or register to mix drinks!'}), 401
    user = User.query.filter_by(email=credentials['email']).first()

    if not user or not user.validate_password(credentials['password']):
        return jsonify({'message': 'Oops! You are not authorised!'}), 401

    return jsonify({'username': user.username, 'token': user.generate_token(), 'message': f'Welcome back {user.username}!'}), 200
