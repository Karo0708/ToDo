
from flask import Flask, request, jsonify
from pymongo import MongoClient
import bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from datetime import timedelta, datetime
import os
from dotenv import load_dotenv
import datetime as dt

load_dotenv()

app = Flask(__name__)

app.config["JWT_SECRET_KEY"] = os.getenv("SECRET_KEY")

jwt = JWTManager(app)

client = MongoClient(os.getenv("MONGO_URI"))
db = client["ToDo"]
usuarios = db["usuarios"]

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not all([username, email, password]):
        return jsonify({"error": "All fields are required."}), 400

    if usuarios.find_one({"email": email}):
        return jsonify({"error": "The email is already registered."}), 409

    hashed_pass = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    new_user = {
        "username": username,
        "email": email,
        "password": hashed_pass.decode('utf-8')
    }

    usuarios.insert_one(new_user)

    return jsonify({"message": "User registered successfully."}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user_input = data.get("username")
    password = data.get("password")

    if not user_input:
        return jsonify({"error": "Username or email is required."}), 400
    if not password:
        return jsonify({"error": "Password is required."}), 400

    user_data = usuarios.find_one({
        "$or": [{"username": user_input}, {"email": user_input}]
    })

    if not user_data:
        return jsonify({"error": "User not found."}), 404

    if not bcrypt.checkpw(password.encode('utf-8'), user_data["password"].encode('utf-8')):
        return jsonify({"error": "Incorrect password."}), 401

    expires_delta=timedelta(days=30)
    token = create_access_token(
        identity= user_data["username"],
        expires_delta= expires_delta
    )

    return jsonify({
        "token": token
    }), 200

if __name__ == '__main__':
    app.run(debug=True)
