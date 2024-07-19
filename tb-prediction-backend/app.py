from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)

# Enable CORS for specific origin
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Load the model using TensorFlow's Keras API
model = tf.keras.models.load_model('model/logistic_regression_model.h5')

# Define the route for prediction with CORS enabled
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        df = pd.DataFrame(data, index=[0])
        df = pd.get_dummies(df, drop_first=True)  # Ensure the dummy variables match the training data
        prediction = model.predict(df)
        return jsonify({'prediction': int(prediction[0][0])})
    except Exception as e:
        # Handle exceptions and return a 500 Internal Server Error with error details
        print(f"Error occurred: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(debug=True)
