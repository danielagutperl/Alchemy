from app import app, db
from models.drink import Drink, Comment
from models.user import UserSchema
# UserSchema rather than the user model, as that has the pass verification on it

user_schema = UserSchema()


 # - Use flask’s app_context() function to:
 #    - Drop all tables in the db
 #    - Create all tables in the db:
with app.app_context():
    db.drop_all()
    db.create_all()

    user, errors = user_schema.load({
        'username': 'Dani',
        'email': 'dani@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })
    #
    if errors:
        raise Exception(errors)

    pisco_sour = Drink(
        name='Pisco Sour',
        image='image-url',
        ingredients='400ml of tonic water, 240ml lemon juice (equivalent to 8 lemons), 4 tablespoons of sugar syrup, Crushed ice, 400ml Alpro Soya Original Drink',
        recipe='1. Fill the glass 1/3 with crushed ice and add 1 teaspoon of sugar syrup, 2. Add the lime juice and pour over the tonic 3. Foam the Alpro Soya Original Drink and add the foam to the mocktail. Garnish with a slice of lime'
    )

    tea_n_tea = Drink(
        name='Tea \'n\' Tea from Pollen Street Social',
        image='image-url',
        ingredients='200ml Coconut Noir Tea (try Canton\'s), 10ml lemon juice, 50ml honey, Mint sprig',
        recipe='Brew your coconut noir tea and leave it to chill. Combine all ingredients in a cocktail shaker and shake. Pour over ice and garnish with mint sprig. Serve with a shortbread biscuit dusted with desiccated coconut.'
    )

    comment_one = Comment(content='C3 ps1 This is also my favourite drink', drink=tea_n_tea)
    comment_two = Comment(content='C3 ps1 This is also my favourite drink', drink=tea_n_tea)
    comment_three = Comment(content='C3 ps1 This is also my favourite drink', drink=pisco_sour)
    comment_four = Comment(content='C4 ps1 Green giraffe', drink=pisco_sour)

db.session.add(user)
db.session.add_all([pisco_sour, tea_n_tea])
db.session.add_all([comment_one, comment_two, comment_three, comment_four])

db.session.commit()
