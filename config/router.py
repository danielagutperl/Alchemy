from app import app
from controllers import drinks, auth

app.register_blueprint(drinks.router, url_prefix='/api')
app.register_blueprint(auth.router, url_prefix='/api')
