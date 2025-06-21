from flask import Flask, request, jsonify
from pymongo import MongoClient
import bcrypt

app = Flask(__name__)

client = MongoClient("mongodb://localhost:27017/")
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

    user = data.get("user")
    password = data.get("password")

    if not user:
        return jsonify({"error": "Username or email is required."}), 400
    if not password:
        return jsonify({"error": "Password is required."}), 400
    
    user_data = usuarios.find_one({"$or": [{"username": user}, {"email": user}]})
    if not user_data:
        return jsonify({"error": "User not found."}), 404
    if not bcrypt.checkpw(password.encode('utf-8'), user_data["password"].encode('utf-8')):
        return jsonify({"error": "Incorrect password."}), 401
    
    return jsonify({"message": "Login successful."}), 200

if __name__ == '__main__':
    app.run(debug=True)