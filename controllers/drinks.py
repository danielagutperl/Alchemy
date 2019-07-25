from flask import Blueprint, jsonify, request
# request from flask is the same as req from Express
from marshmallow import ValidationError
from models.drink import Drink, DrinkSchema
from models.drink import Comment, CommentSchema
from app import db
from lib.secure_route import secure_route


router = Blueprint(__name__, 'drinks')
# TODO: this is our api? Ask about this and the magic name.
drink_schema = DrinkSchema()
comment_schema = CommentSchema()
# this instatiates the schema and we can use it to convert the data to and from complex json.

# GET many drinks
@router.route('/drinks', methods=['GET'])
def index():
    # select all drinks and store in a variable:
    drinks = Drink.query.all()
    return drink_schema.jsonify(drinks, many=True), 200
# The index function is the same we had set up in app earlier
# def index():
#     # select all drinks and store in a variable:
#     drinks = Drink.query.all()
#     # bring back the jsonified (from ma) drink_schema with all the drinks from ^^ :
#     return drink_schema.jsonify(drinks), 200

# GET one drink by id
@router.route('/drinks/<int:drinks_id>', methods=['GET'])
def show(drinks_id):
    drink = Drink.query.get(drinks_id)
    if not drink:
        return jsonify({'message': 'not found here'}), 404
    return drink_schema.jsonify(drink), 200
# TODO: see if this will break as I've told it to expect many line 10...

# POST one drink to the collection of many drinks
@router.route('/drinks', methods=['POST'])
@secure_route
def create():
    data = request.get_json()
# The request.get_json method will convert JSON sent from the client into a dictionary.
    drink, errors = drink_schema.load(data)
# This can then be used by the schema's load method to create a car object or any errors that may have occurred.
    if errors:
        return jsonify(errors), 422
# If there are errors, we can send them back to the client with a 422 response.
    drink.save()
# Otherwise we can save the car and return it as JSON.
    return drink_schema.jsonify(drink), 201

@router.route('/drinks/<int:drinks_id>', methods=['PUT'])
@secure_route
def update(drinks_id):
    drink = Drink.query.get(drinks_id)
    if not drink:
        return jsonify({'message': 'not found here'}), 404
    data = request.get_json()
    drink, errors = drink_schema.load(data, instance=drink)
    # the instance keyword argument in the schema's load method supplies the model which should be updated by the incoming JSON.
    # , partial=True ?? que hace??
    if errors:
        return jsonify(errors), 422
    drink.save()
    return drink_schema.jsonify(drink), 202

@router.route('/drinks/<int:drinks_id>', methods=['DELETE'])
@secure_route
def delete(drinks_id):
    drink = Drink.query.get(drinks_id)
    if not drink:
        return jsonify({'message': 'not found here'}), 404
    drink.remove()
    return '', 204

@router.route('drinks/<int:drink_id>/comments', methods=['POST'])
@secure_route
def comment_create(drink_id):
    drink = Drink.query.get(drink_id)
    if not drink:
        return jsonify({'message': 'not found here'}), 404
    data = request.get_json()
    comment, errors = comment_schema.load(data)
    if errors:
        return jsonify(errors), 422
    comment.drink = drink
    comment.save()
    return comment_schema.jsonify(comment), 202


@router.route('/drinks/<int:drinks_id>/comments/<int:comment_id>', methods=['DELETE'])
@secure_route
def comment_delete(**kwargs):
    comment = Comment.query.get(kwargs['comment_id'])
    if not comment:
        return jsonify({'message': 'not found here'}), 404
    comment.remove()
    return '', 204
