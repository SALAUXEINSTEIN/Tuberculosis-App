import axios from "axios";
import React, { useState } from "react";
import Loader from "./Loader";
import { Link, useNavigate } from "react-router-dom";

const MainPagePopUp = () => {
  const [formData, setFormData] = useState({
    Age: 0,
    Gender: 0, // 0: Male, 1: Female
    Ethnicity: 0, // 0: Ethnicity1, 1: Ethnicity2, 2: Ethnicity3
    History_of_TB: 0,
    Diabetes: 0,
    HIV_Status: 0,
    Cough_Duration: 0,
    Chest_Pain: 0,
    Weight_Loss: 0,
    Fever: 0,
    BCG_Vaccination: 0,
    Income_Level: 0, // 0: Low, 1: Medium, 2: High
    Education_Level: 0, // 0: None, 1: Primary, 2: Secondary, 3: Tertiary
    Employment_Status: 0, // 0: Unemployed, 1: Employed, 2: Self-Employed, 3: Retired
    Living_Conditions: 0, // 0: Crowded, 1: Non-Crowded
    Air_Quality_Index: 0,
    Exposure_to_TB: 0,
    Geographic_Location: 0, // 0: Urban, 1: Rural
  });

  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name ? +value : parseInt(value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData)
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("There was an error making the prediction!", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mainPageCont">
      hyhbytgb
      <div className="mainpage">
        <span className="cancel">
          <Link to="/">
            <h2>X</h2>
          </Link>
        </span>
        <div className="container">
          <h1 className="ct_h1">TB Prediction</h1>
          <hr />
          {!isLoading ? (
            prediction === null ? (
              <div className="formContainer">
                <form onSubmit={handleSubmit}>
                  <div className="formInnerContainer">
                    <label>
                      Age:
                      <input
                        type="number"
                        name="Age"
                        value={formData.Age}
                        onChange={handleChange}
                        min="0" // Prevents negative values
                      />
                    </label>
                    <label>
                      Gender:
                      <select
                        name="Gender"
                        value={formData.Gender}
                        onChange={handleChange}
                      >
                        <option value={0}>Male</option>
                        <option value={1}>Female</option>
                      </select>
                    </label>
                    <label>
                      Ethnicity:
                      <select
                        name="Ethnicity"
                        value={formData.Ethnicity}
                        onChange={handleChange}
                      >
                        <option value={0}>Ethnicity1</option>
                        <option value={1}>Ethnicity2</option>
                        <option value={2}>Ethnicity3</option>
                      </select>
                    </label>
                    <label>
                      History of TB:
                      <input
                        type="number"
                        name="History_of_TB"
                        value={formData.History_of_TB}
                        onChange={handleChange}
                        min="0" // Prevents negative values
                      />
                    </label>
                    <label>
                      Diabetes:
                      <input
                        type="number"
                        name="Diabetes"
                        value={formData.Diabetes}
                        onChange={handleChange}
                        min="0" // Prevents negative values
                      />
                    </label>
                    <label>
                      HIV Status:
                      <input
                        type="number"
                        name="HIV_Status"
                        value={formData.HIV_Status}
                        onChange={handleChange}
                        min="0" // Prevents negative values
                      />
                    </label>
                    <label>
                      Cough Duration:
                      <input
                        type="number"
                        name="Cough_Duration"
                        value={formData.Cough_Duration}
                        onChange={handleChange}
                        min="0" // Prevents negative values
                      />
                    </label>
                    <label>
                      Chest Pain:
                      <input
                        type="number"
                        name="Chest_Pain"
                        value={formData.Chest_Pain}
                        onChange={handleChange}
                        min="0" // Prevents negative values
                      />
                    </label>
                    <label>
                      Weight Loss:
                      <input
                        type="number"
                        name="Weight_Loss"
                        value={formData.Weight_Loss}
                        onChange={handleChange}
                        min="0"
                      />
                    </label>
                    <label>
                      Fever:
                      <input
                        type="number"
                        name="Fever"
                        value={formData.Fever}
                        onChange={handleChange}
                        min="0"
                      />
                    </label>
                    <label>
                      BCG Vaccination:
                      <input
                        type="number"
                        name="BCG_Vaccination"
                        value={formData.BCG_Vaccination}
                        onChange={handleChange}
                        min="0"
                      />
                    </label>
                    <label>
                      Income Level:
                      <select
                        name="Income_Level"
                        value={formData.Income_Level}
                        onChange={handleChange}
                      >
                        <option value={0}>Low</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                      </select>
                    </label>
                    <label>
                      Education Level:
                      <select
                        name="Education_Level"
                        value={formData.Education_Level}
                        onChange={handleChange}
                      >
                        <option value={0}>None</option>
                        <option value={1}>Primary</option>
                        <option value={2}>Secondary</option>
                        <option value={3}>Tertiary</option>
                      </select>
                    </label>
                    <label>
                      Employment Status:
                      <select
                        name="Employment_Status"
                        value={formData.Employment_Status}
                        onChange={handleChange}
                      >
                        <option value={0}>Unemployed</option>
                        <option value={1}>Employed</option>
                        <option value={2}>Student</option>
                      </select>
                    </label>
                    <label>
                      Living Conditions:
                      <select
                        name="Living_Conditions"
                        value={formData.Living_Conditions}
                        onChange={handleChange}
                      >
                        <option value={0}>Crowded</option>
                        <option value={1}>Not_Crowded</option>
                      </select>
                    </label>
                    <label>
                      Air Quality Index:
                      <input
                        type="number"
                        name="Air_Quality_Index"
                        value={formData.Air_Quality_Index}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Exposure to TB:
                      <input
                        type="number"
                        name="Exposure_to_TB"
                        value={formData.Exposure_to_TB}
                        onChange={handleChange}
                        min="0"
                      />
                    </label>
                    <label>
                      Geographic Location:
                      <select
                        name="Geographic_Location"
                        value={formData.Geographic_Location}
                        onChange={handleChange}
                      >
                        <option value={0}>Urban</option>
                        <option value={1}>Rural</option>
                      </select>
                    </label>
                  </div>

                  <div className="buttonCont">
                    <button className="btn btn-mainp" type="submit">
                      Predict
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="result">
                <h1 className={`${prediction && "alarm"}`}>
                  {prediction
                    ? "You Have Tuberculosis, Please Go and see a doctor Immediately."
                    : "You do not have tuberculosis but if symptoms persist, please seek medical care."}
                </h1>
                <button className="btn btn-mainp" onClick={() => navigate("/")}>
                  Ok
                </button>
              </div>
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPagePopUp;
