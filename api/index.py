from flask import Flask, jsonify, request

# Create a Flask web application instance
app = Flask(__name__)

# Define a route for the root URL ("/")
@app.route('/')
def home():
    """
    Handles requests to the root URL.
    Returns a simple JSON message.
    """
    return jsonify({"message": "Hello from Vercel Python Serverless Function!"})

# Define another route for a personalized greeting
@app.route('/greet/<name>')
def greet(name):
    """
    Handles requests to /greet/<name>.
    Returns a personalized JSON greeting.
    """
    return jsonify({"message": f"Hello, {name}!"})

# This is important for Vercel:
# Vercel needs an 'app' object or a 'handler' function as the entry point.
# For Flask, the 'app' object is what it looks for.