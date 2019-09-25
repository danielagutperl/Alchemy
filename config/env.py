import os

db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/alchemy')
secret = os.getenv('SECRET', 'secretsquirrelchinesewhispers')