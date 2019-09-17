import os

db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/alchemy-mixology')
secret = os.getenv('SECRET', 'secretsquirrelchinesewhispers')