# Alchemy
Alchemy is a searchable website for users to find and share alcohol-free drinks recipes.

The site displays a search homepage with a simple UI where users can search for alcohol free drink recipes. 

Users can also create (or edit or delete) their own recipes. That functionality is only available to logged in/authenticated owners of the drink recipe.

![alt text][Screenshot]

## Using the App
Drink recipies are searchable from the homepage.
Creating, editing or commenting on drinks is secured functionality. Users need to first register, and then can login to use secure functionality.

## Requirements
* Build a full-stack application.
* Consume your API with a separate front-end, built with React.
* Multiple relationships and CRUD functionality for at least a couple of models
* Deployed.

Here's the drink model: 
```python
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

    comments = fields.Nested('CommentSchema', many=True, exclude=('drink', 'updated_at'))

class Comment(db.Model, BaseModel):

    __tablename__ = 'comments'

    content = db.Column(db.Text, nullable=False)
    comment_author = db.Column(db.String(50))
    drink_id = db.Column(db.Integer, db.ForeignKey('drinks.id'))
    drink = db.relationship('Drink', backref='comments')

class CommentSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Comment
```

## Technology used
* The backend is written in Python 3/Flask 
* SQL database
* React frontend
* CSS and I also used Material UI

### How I spent my time
| Time          | Task          |
| ------------- |:-------------:|
| 2 days        | Ideation, planning, models, wireframes |
| ~ 3 days        | Projects setup, backend build     |
| ~ 3 days  | Frontend work and styling      |
| Half - 1 day  | Testing, bug fixes, deployment      |

## Wins and blockers
The thing I enjoyed most is writing the backend in a different language (Python 3) to the language I would normally have written this in. It allowed me to deepen my understanding of coding concepts in general, and broadened my horizons for learning new languages.

Another win was getting this done in such a short time. I feel like I've come so far in a matter of months, and I think its amazing what we programmers, and now that 'we' includes me, can do with very little time (even though I'm still early in my career).

## Future features
If I had more time, I would build this out by:
* I’d definitely change the design and customise the UI. I’m pleased with what I managed to achieve in a short time frame, and that I managed to scope the project/design for the limited time available, but I believe with more time spent on the design it could look much better and the quality could improve.
* Moving the search to the backend, rather than filtering on the front, which is what is happening now!
* Writing a crawler to get more drinks recipes without me having to type them in manually!
* Adding bartender profiles and links with social media platforms
* Adding search functionality so users can get a drink recommendation to try based on what the have liked or is on their profile
* Adding bar/place profiles so that businesses that offer alcohol-free menus can add their details, location etc. for users to search where they can have the drink made for them

## Key learnings
* My main goal was to complete the entire app in accordance with the requirements we were given. In the ideation, design and planning, I also tried to leave room for functionality and improvements to be made beyond making an app to meet the basic requirments. 
* I also used Material UI for the first time, and I feel this adds another tool to my kit.

[Screenshot]: Screenshot