import os

db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5000/alchemy')
secret = os.getenv('SECRET', 'secretsquirrelchinesewhispers')