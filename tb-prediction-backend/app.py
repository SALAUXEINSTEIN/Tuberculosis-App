# app.py
from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the model

model = tf.keras.models.load_model('model/logistic_regression_model.h5')

# Define the route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    df = pd.DataFrame(data, index=[0])
    df = pd.get_dummies(df, drop_first=True)  # Ensure the dummy variables match training data
    prediction = model.predict(df)
    return jsonify({'prediction': int(prediction[0][0])})

if __name__ == '__main__':
    app.run(debug=True)