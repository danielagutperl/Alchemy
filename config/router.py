import os
from app import app
from controllers import drinks, auth

app.register_blueprint(drinks.router, url_prefix='/api')
app.register_blueprint(auth.router, url_prefix='/api')

@router.route('/', defaults={'path': ''})
@router.route('/<path:path>')
def catch_all(path):

    if os.path.isfile('dist/' + path):
        return app.send_static_file(path)

    return app.send_static_file('index.html')