from datetime import datetime, timedelta
import jwt
# TODO: find out why jwt doesnt need from when importing?
from sqlalchemy.ext.hybrid import hybrid_property
from marshmallow import validates_schema, ValidationError, fields
from app import db, ma, bcrypt
from config.env import secret
from .base import BaseModel, BaseSchema


# the generate token method will go in the user model and be called in the controller.

class User(db.Model, BaseModel):

    __tablename__ = 'users'

    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(130), nullable=False, unique=True)
    password_hash = db.Column(db.String(130), nullable=False)

# create a pssword property on the user model:
    @hybrid_property
    def password(self):
        pass
# the password hybrid property will be used to receive the plain text password from the client/user. We will never store the plaintext password in the db

# this controls what happens after we've received the plaintext password from the client
    @password.setter
    def password(self, plaintext):
# this function must have the same name as the hybrid property. We're dealing with the same password here, hasing it and saving it to the users hashed password prop.
        self.password_hash = bcrypt.generate_password_hash(plaintext).decode('utf-8')

    def validate_password(self, plaintext):
        return bcrypt.check_password_hash(self.password_hash, plaintext)

    def generate_token(self):
        payload = {
            'exp': datetime.utcnow() +timedelta(days=1),
            'iat': datetime.utcnow(),
            'sub': self.id
        }

        token = jwt.encode(
            payload,
            secret,
            'HS256'
        ).decode('utf-8')

        return token
# HS256 is the encoding algorithm we are using


class UserSchema(ma.ModelSchema, BaseSchema):

    @validates_schema
    def check_passwords_match(self, data):
        if data.get('password') != data.get('password_confirmation'):
            raise ValidationError('Passwords do not match', 'password_confirmation')

    password = fields.String(required=True)
    password_confirmation = fields.String(required=True)

    class Meta:
        model = User
        exclude = ('password_hash',)
    # this is massively important, otherwise we'll end up sending this back to the client in our res
