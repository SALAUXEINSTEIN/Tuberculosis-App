from flask import Flask, request, jsonify
import tensorflow as tf
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for specific origin
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Load the model using TensorFlow's Keras API
model = tf.keras.models.load_model('model/logistic_regression_model.h5')

# Define the route for prediction with CORS enabled
@app.route('/predict', methods=['POST'])
def predict():
    input_shape = model.input_shape

    # Get the model summary to understand its architecture
    model.summary()

    # Print the input shape
    print(f"Model input shape: {input_shape}")

    try:
        # Get the JSON data from the request
        data = request.json
        print(f"Received data: {data}")

        # Convert data to DataFrame
        test_df = pd.DataFrame([data])

        # Print DataFrame for debugging
        print(f"Test DataFrame: {test_df.head()}")

        # Apply preprocessing to match the model's training data schema
        test_df = pd.get_dummies(test_df, drop_first=True)

        # Print processed DataFrame for debugging
        print(f"Processed DataFrame: {test_df.head()}")

        # Expected columns should match the model's training data schema
        expected_columns = [
            'Age', 'History_of_TB', 'Diabetes', 'HIV_Status', 'Cough_Duration',
            'Chest_Pain', 'Weight_Loss', 'Fever', 'BCG_Vaccination', 
            'Air_Quality_Index', 'Exposure_to_TB', 
            'Gender_1', 'Gender_2', 'Ethnicity_1', 'Ethnicity_2', 'Ethnicity_3', 
            'Income_Level_1', 'Income_Level_2', 'Income_Level_3', 
            'Education_Level_1', 'Education_Level_2', 'Education_Level_3',
            'Employment_Status_1', 'Employment_Status_2', 'Employment_Status_3', 
            'Living_Conditions_1', 'Living_Conditions_2', 
            'Geographic_Location_1', 'Geographic_Location_2', 'TB_Risk_1'
        ]

        # Add missing columns with default value 0
        for col in expected_columns:
            if col not in test_df.columns:
                test_df[col] = 0  # Add missing column with default value 0

        # Reorder columns to match the model's expected input
        test_df = test_df[expected_columns]

        # Check if the processed DataFrame has the expected number of features
        expected_features = model.input_shape[1]  # Exclude batch dimension
        actual_features = test_df.shape[1]
        if actual_features != expected_features:
            raise ValueError(f"Expected {expected_features} features, but got {actual_features}")

        # Predict
        prediction = model.predict(test_df)

        # Print prediction for debugging
        print(f"Prediction: {prediction}")

        # Return the prediction as JSON
        return jsonify({'prediction': int(prediction[0][0])})
    except Exception as e:
        # Handle exceptions and return a 500 Internal Server Error with error details
        print(f"Error occurred: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(debug=True)
