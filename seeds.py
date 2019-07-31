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

    dan, errors = user_schema.load({
        'username': 'Dani',
        'email': 'dani@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })

    seb, errors = user_schema.load({
        'username': 'Seb',
        'email': 'seb@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })

    dave, errors = user_schema.load({
        'username': 'Dave',
        'email': 'dave@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })



    #
    if errors:
        raise Exception(errors)

    pisco_sour = Drink(
        name='Pisco Sour',
        image='../assets/johann-trasch-pisco-sour-unsplash.jpg',
        ingredients='400ml of tonic water, 240ml lemon juice (equivalent to 8 lemons), 4 tablespoons of sugar syrup, Crushed ice, 400ml Alpro Soya Original Drink',
        recipe='1. Fill the glass 1/3 with crushed ice and add 1 teaspoon of sugar syrup, 2. Add the lime juice and pour over the tonic 3. Foam the Alpro Soya Original Drink and add the foam to the mocktail. Garnish with a slice of lime'
    )

    tea_n_tea = Drink(
        name='Tea \'n\' Tea from Pollen Street Social',
        image='../assets/johann-trasch-tea-n-tea-unsplash.jpg',
        ingredients='200ml Coconut Noir Tea (try Canton\'s), 10ml lemon juice, 50ml honey, Mint sprig',
        recipe='Brew your coconut noir tea and leave it to chill. Combine all ingredients in a cocktail shaker and shake. Pour over ice and garnish with mint sprig. Serve with a shortbread biscuit dusted with desiccated coconut.'
    )

    rose_lemon_spritzer = Drink(
        name='Rose Lemon Spritzer from Half Baked Harvest',
        image='../assets/paula-hayes-rose-lemon-unsplash.jpg',
        ingredients='2 tablespoons rose water * optional, 2 tablespoons fresh lemon juice, 1/2-2 ounces alcohol-free Vodka to taste!, 1-2 tablespoon honey or to taste (use agave if vegan), a few drops of blood orange or pomegranate juice for color (optional), 3/4 cup sparkling water or more to taste, fresh roses for garnish (optional)',
        recipe='Combine all the rose water, fresh lemon juice, vodka, honey and blood orange or pomegranate juice (if using) in a cocktail shaker and fill with ice. Shake until combined and then strain into a glass. Pour in the sparkling water. Garnish with fresh roses. DRINK!'
    )

    bloody_mary = Drink(
        name='Classic Bloody Mary',
        image='../assets/johann-trasch-bloody-mary-unsplash.jpg',
        ingredients='Bloody Mary mix (try Zing Zang!), fresh rosemary, celery, Tabasco, garlic powder , black pepper, Worcestershire sauce, blue cheese olives',
        recipe='First prepare your glass with a salty rim. In shaker, mix the Bloody Mary mix (enough to fill your glass 3/4 of the way full), a splash of Tabasco, a splash of Worcestershire sauce, a pinch of garlic powder, and a pinch of black pepper. Shake it and pour it over ice. Garnish with a stalk of celery, a piece of rosemary, and some blue cheese olives. Enjoy!'
    )

    cranberry_mojito = Drink(
        name='Cranberry Mojito',
        image='../assets/dose-juice-cran-mojito-unsplash.jpg',
        ingredients='1/2 cup organic cranberry juice, 1/2 cup filtered water, a few stemmed leaves of fresh mint, fresh or frozen cranberries for garnish',
        recipe='In a tall glass, press the mint leaves with a muddler until some juice is released. Add in juice and water and stir. Garnish with cranberries: frozen cranberries will act like ice cubes here and won’t water down your drink! Enjoy!'
    )

    cherry_bomb_mocktail = Drink(
        name='Cherry Bomb Mocktail',
        image='image-url',
        ingredients='Non-alcoholic Rum (Try Stryyk!), Lemon lime soda, Grenadine, Lime, Maraschino cherries',
        recipe='Grab you pitcher and combine the soda, grenadine and lime juice. Add 4 Ounces of non-alcoholic rum. Give it a big stir to mix it up! Pour over the rocks or ice ball in law ball glass then garnish with cherries. Yesssss! See, told you this was easy!'
    )

    virgin_strawberry_margarita = Drink(
        name='Virgin Strawberry Margarita',
        image='../assets/rene-pollock-rose-lemon-unsplash.jpg',
        ingredients='3/4 cup strawberries , frozen, 1.5 oz. orange juice , fresh squeezed, 1 oz. lime juice , fresh squeezed, 1 oz. agave nectar, 1/4 oz. orange blossom water',
        recipe='In the base of a blender, measure out the strawberries, orange juice, lime juice, agave nectar and orange blossom water. Blend until smooth. (Depending on the strength of your blender, this could take a few minutes.) Enjoy immediately in your favorite glass!'
    )

    pine_lime_mocktail = Drink(
        name='Pineapple and Lime Mocktail from BBC Good Food',
        image='../assets/pineapple-supply-co-qWlkCwBnwOE-unsplash.jpg',
        ingredients='1 tsp clear honey, edible gold glitter, small bunch coriander leaves, juice 1 lime, 750ml pineapple juice, a handful of ice, 400ml tonic water',
        recipe='Dip a pastry brush in the honey and paint a line down one side of 4 tumblers. Sprinkle some edible gold glitter over the honey, dust off any excess, then put the glasses in the fridge. Chop the coriander leaves and place in a cocktail shaker with the lime juice, 100ml pineapple juice and a handful of ice. Shake together until the outside of the shaker feels cold. Strain into the glasses, add extra ice cubes and divide 650ml pineapple juice and the tonic water between the glasses.'
    )

    frozen_banana_colada = Drink(
        name='Frozen Banana Colada',
        image='../assets/alexander-mils-banana-colada-unsplash.jpg',
        ingredients='Banana, Pineapple chunks, Cream of coconut, Non-alcoholic Rum (Try Stryyk!), Ice',
        recipe='Place banana, pineapple, Alcohol-free rum and cream of coconut and blend. Add in ice and blend until smooth. Pour into a tall glass, serve with pineapple garnish and enjoy!'
    )

    blackberry_moscow_mule = Drink(
        name='Blackberry Moscow Mule',
        image='../assets/melissa-walker-horn-blackberry-unsplash.jpg',
        ingredients='Blackberries, Sugar, Ginger beer, Ice, Mint. If you like, you could try adding Alcohol-free Vodka - Arkay or Stryyk have versions you could look out for - but the recipe is delicious without it!',
        recipe='In a large glass jar muddle 1 cup Blackberries, 1 tablespoon Sugar and 2 shots of Alcohol-free Vodka (if desired) until berries are mashed and smooth. Sweeter blackberries will require less sugar, adjust as needed. Fill a tall glass with ice. Fill glass half way full of ginger beer. Tilt glass and carefully pour blackberry mixture into glass until full. Garnish with additional blackberries and mint if desired. Then stir those beauties, and sip away'
    )

    moscow_mule = Drink(
        name='Non Alcoholic Moscow Mule',
        image='https://i0.wp.com/lmld.org/wp-content/uploads/2017/12/moscow-mule-5.jpg?w=700&ssl=1',
        ingredients='1 lime (1-2 tablespoons juice, fresh is best), TBS simple syrup, 1/4 cup club soda, 3-4 mint leaves (torn, optional), 3/4 cup Ginger Beer, crushed ice',
        recipe='In the bottom of cup, pour juice from lime, simple syrup and club soda. Add mint leaves if desired. Fill the cup about half way with ice. Then pour about 3/4 a cup of ginger beer over the ice. Garnish with mint leaves and a lime wedge if desired, and serve.'
    )

    comment_one = Comment(content='This is also my favourite drink', drink=tea_n_tea)
    comment_two = Comment(content='This is also my favourite drink', drink=tea_n_tea)
    comment_three = Comment(content='This is also my favourite drink', drink=pisco_sour)
    comment_four = Comment(content='Loud giraffe', drink=pisco_sour)

db.session.add_all([dan, seb, dave])
db.session.add_all([pisco_sour, tea_n_tea, rose_lemon_spritzer, bloody_mary, cranberry_mojito, cherry_bomb_mocktail, virgin_strawberry_margarita, pine_lime_mocktail, frozen_banana_colada, blackberry_moscow_mule, moscow_mule])
db.session.add_all([comment_one, comment_two, comment_three, comment_four])

db.session.commit()
