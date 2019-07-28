from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Drink(db.Model, BaseModel):

    __tablename__ = 'drinks'

    name = db.Column(db.String(50), nullable=False, unique=True)
    image = db.Column(db.String(100), nullable=False)
    ingredients = db.Column(db.String(400), nullable=False)
    recipe = db.Column(db.String(1000), nullable=False)
    drink_creator = db.Column(db.String(50))

class DrinkSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Drink

    comments = fields.Nested('CommentSchema', many=True, exclude=('drink', 'created_at', 'updated_at'))

class Comment(db.Model, BaseModel):

    __tablename__ = 'comments'

    content = db.Column(db.Text, nullable=False)
    comment_author = db.Column(db.String(50))
    drink_id = db.Column(db.Integer, db.ForeignKey('drinks.id'))
    drink = db.relationship('Drink', backref='comments')

class CommentSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Comment
