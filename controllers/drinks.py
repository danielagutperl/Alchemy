from flask import Blueprint, jsonify, request, g
# request from flask is the same as req from Express
from marshmallow import ValidationError
from models.drink import Drink, DrinkSchema
from models.drink import Comment, CommentSchema
from app import db
from lib.secure_route import secure_route


router = Blueprint(__name__, 'drinks')
drink_schema = DrinkSchema()
comment_schema = CommentSchema()

@router.route('/drinks', methods=['GET'])
def index():
    drinks = Drink.query.all()
    return drink_schema.jsonify(drinks, many=True), 200

@router.route('/drinks/<int:drinks_id>', methods=['GET'])
def show(drinks_id):
    drink = Drink.query.get(drinks_id)
    if not drink:
        return jsonify({'message': 'not found here'}), 404
    return drink_schema.jsonify(drink), 200

@router.route('/drinks', methods=['POST'])
@secure_route
def create():
    data = request.get_json()
    drink, errors = drink_schema.load(data)
    if errors:
        return jsonify(errors), 422
    drink.save()
    return drink_schema.jsonify(drink), 201

@router.route('/drinks/<int:drinks_id>', methods=['PUT'])
@secure_route
def update(drinks_id):
    drink = Drink.query.get(drinks_id)
    if not drink:
        return jsonify({'message': 'not found here'}), 404
    data = request.get_json()
    drink, errors = drink_schema.load(data, instance=drink)
    if errors:
        return jsonify(errors), 422
    drink.save()
    return drink_schema.jsonify(drink), 202

@router.route('/drink/<int:drinks_id>', methods=['DELETE'])
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
