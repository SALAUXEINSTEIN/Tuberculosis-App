import axios from "axios";
import React, { useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const MainPagePopUp = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "Male",
    ethnicity: "Ethnicity1",
    history_of_tb: 0,
    diabetes: 0,
    hiv_status: 0,
    cough_duration: 0,
    chest_pain: 0,
    weight_loss: 0,
    fever: 0,
    bcg_vaccination: 0,
    income_level: "Low",
    education_level: "None",
    employment_status: "Unemployed",
    living_conditions: "Crowded",
    air_quality_index: 0,
    exposure_to_tb: 0,
    geographic_location: "Urban",
  });

  const [prediction, setPrediction] = useState(null);
  const [isloading, setIsloading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );
      setPrediction(response.data.prediction);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.error("There was an error making the prediction!", error);
    }
  };
  return (
    <div className="mainPageCont">
      <div className="mainpage">
        <span className="cancel"><Link to="/"><h2>X</h2></Link></span>
        <div className="container">
          <h1>TB Prediction</h1>
          {!isloading ? (
            <div className="formContainer">
              <form onSubmit={handleSubmit}>
                <div className="formInnerContainer">
                  <label>
                    Age:
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Gender:
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </label>
                  <label>
                    Ethnicity:
                    <input
                      type="text"
                      name="ethnicity"
                      value={formData.ethnicity}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    History of TB:
                    <input
                      type="number"
                      name="history_of_tb"
                      value={formData.history_of_tb}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Diabetes:
                    <input
                      type="number"
                      name="diabetes"
                      value={formData.diabetes}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    HIV Status:
                    <input
                      type="number"
                      name="hiv_status"
                      value={formData.hiv_status}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Cough Duration:
                    <input
                      type="text"
                      name="cough_duration"
                      value={formData.cough_duration}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Chest Pain:
                    <input
                      type="number"
                      name="chest_pain"
                      value={formData.chest_pain}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Weight Loss:
                    <input
                      type="number"
                      name="weight_loss"
                      value={formData.weight_loss}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Fever:
                    <input
                      type="number"
                      name="fever"
                      value={formData.fever}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    BCG Vaccination:
                    <input
                      type="number"
                      name="bcg_vaccination"
                      value={formData.bcg_vaccination}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Income Level:
                    <select
                      name="income_level"
                      value={formData.income_level}
                      onChange={handleChange}
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </label>
                  <label>
                    Education Level:
                    <select
                      name="education_level"
                      value={formData.education_level}
                      onChange={handleChange}
                    >
                      <option value="None">None</option>
                      <option value="Primary">Primary</option>
                      <option value="Secondary">Secondary</option>
                      <option value="Tertiary">Tertiary</option>
                    </select>
                  </label>
                  <label>
                    Employment Status:
                    <select
                      name="employment_status"
                      value={formData.employment_status}
                      onChange={handleChange}
                    >
                      <option value="Unemployed">Unemployed</option>
                      <option value="Employed">Employed</option>
                      <option value="Self-Employed">Self-Employed</option>
                      <option value="Retired">Retired</option>
                    </select>
                  </label>
                  <label>
                    Living Conditions:
                    <input
                      type="text"
                      name="living_conditions"
                      value={formData.living_conditions}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Air Quality Index:
                    <input
                      type="number"
                      name="air_quality_index"
                      value={formData.air_quality_index}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Exposure to TB:
                    <input
                      type="number"
                      name="exposure_to_tb"
                      value={formData.exposure_to_tb}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Geographic Location:
                    <select
                      name="geographic_location"
                      value={formData.geographic_location}
                      onChange={handleChange}
                    >
                      <option value="Urban">Urban</option>
                      <option value="Rural">Rural</option>
                    </select>
                  </label>
                </div>

                <div className="buttonCont">
                  <button className="btn btn-mainp" type="submit">Predict</button>
                </div>
              </form>
            </div>
          ) : (
            <Loader />
          )}
          {prediction !== null && <p>Prediction: {prediction}</p>}
        </div>
      </div>
    </div>
  );
};

export default MainPagePopUp;
