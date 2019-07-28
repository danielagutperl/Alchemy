from datetime import datetime, timedelta
import jwt
# TODO: find out why jwt doesnt need from when importing?
from sqlalchemy.ext.hybrid import hybrid_property
from marshmallow import validates_schema, ValidationError, fields
from app import db, ma, bcrypt
from config.env import secret
from .base import BaseModel, BaseSchema

class User(db.Model, BaseModel):

    __tablename__ = 'users'

    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(130), nullable=False, unique=True)
    password_hash = db.Column(db.String(130), nullable=False)

    @hybrid_property
    def password(self):
        pass

    @password.setter
    def password(self, plaintext):

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
