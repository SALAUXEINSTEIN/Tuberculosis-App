# from flask import Flask, request, jsonify
# import tensorflow as tf
# import numpy as np
# from flask_cors import CORS
# import pandas as pd

# app = Flask(__name__)

# # Enable CORS for specific origin
# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# # Load the model using TensorFlow's Keras API
# model = tf.keras.models.load_model('model/logistic_regression_model.h5')

# # Define the route for prediction with CORS enabled
# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         # Create test DataFrame
#         test_df = pd.DataFrame({
#             "age": [59],
#             "gender": ["Male"],
#             "ethnicity": ["Ethnicity1"],
#             "history_of_tb": [0],
#             "diabetes": [0],
#             "hiv_status": [0],
#             "cough_duration": [0],
#             "chest_pain": [0],
#             "weight_loss": [0],
#             "fever": [0],
#             "bcg_vaccination": [0],
#             "income_level": ["Low"],
#             "education_level": ["None"],
#             "employment_status": ["Unemployed"],
#             "living_conditions": ["Crowded"],
#             "air_quality_index": [49],
#             "exposure_to_tb": [0],
#             "geographic_location": ["Urban"]
#         })
        
#         # Print DataFrame for debugging
#         print(f"Test DataFrame: {test_df.head()}")

#         # Process the DataFrame to match the model's input format
#         # (e.g., one-hot encoding)
#         test_df = pd.get_dummies(test_df, drop_first=True)

#         # Print processed DataFrame for debugging
#         print(f"Processed DataFrame: {test_df.head()}")

#         # Predict
#         prediction = model.predict(test_df)

#         # Print prediction for debugging
#         print(f"Prediction: {prediction}")

#         # Return the prediction as JSON
#         return jsonify({'prediction': int(prediction[0][0])})
#     except Exception as e:
#         # Handle exceptions and return a 500 Internal Server Error with error details
#         print(f"Error occurred: {e}")
#         return jsonify({'error': 'Internal Server Error'}), 500

# if __name__ == '__main__':
#     app.run(debug=True)


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
        # Create test DataFrame
        test_df = pd.DataFrame({
            "age": [59],
            "gender": ["Male"],
            "ethnicity": ["Ethnicity1"],
            "history_of_tb": [0],
            "diabetes": [0],
            "hiv_status": [0],
            "cough_duration": [0],
            "chest_pain": [0],
            "weight_loss": [0],
            "fever": [0],
            "bcg_vaccination": [0],
            "income_level": ["Low"],
            "education_level": ["None"],
            "employment_status": ["Unemployed"],
            "living_conditions": ["Crowded"],
            "air_quality_index": [49],
            "exposure_to_tb": [0],
            "geographic_location": ["Urban"]
        })
        
        # Print DataFrame for debugging
        print(f"Test DataFrame: {test_df.head()}")

        # Apply the same preprocessing steps as used during model training
        # Example: Convert categorical features to dummy variables
        test_df = pd.get_dummies(test_df, drop_first=True)

        # Print processed DataFrame for debugging
        print(f"Processed DataFrame: {test_df.head()}")

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
