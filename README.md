# 🏡 Bangalore Home Price Prediction

A full-stack Machine Learning web application that predicts house prices in Bangalore based on user inputs such as area (sqft), number of bedrooms (BHK), bathrooms, and location.

---

## 🚀 Project Overview

This project demonstrates an end-to-end Machine Learning deployment workflow:
- Data preprocessing and model training
- Model serialization using Pickle
- Backend REST API using Flask
- Frontend UI using HTML, CSS, JavaScript
- AJAX-based communication between frontend and backend

---

## 🧠 Machine Learning Model

- Algorithm: Linear Regression
- Features:
  - Total Square Feet
  - Number of Bathrooms
  - Number of Bedrooms (BHK)
  - Location (One-Hot Encoded)
- Dataset: Bangalore house price dataset
- Output: Estimated house price (in Lakhs)

---

## 🗂️ Project Structure

BangaloreHomePrices/
├── client/
│   ├── app.html
│   ├── app.js
│   └── app.css
├── server/
│   ├── server.py
│   ├── util.py
│   └── artifacts/
│       ├── columns.json
│       └── bangalore_home_prices.pickle
├── model/
│   └── RealState.ipynb
└── README.md

---

## ⚙️ Backend API Endpoints

GET /get_location_names  
Returns the list of available locations.

Example Response:
{
  "locations": ["Electronic City", "Rajaji Nagar", "..."]
}

POST /predict_home_price  
Predicts the house price.

Request Body:
{
  "location": "1st Phase JP Nagar",
  "total_sqft": 1000,
  "bhk": 3,
  "bath": 2
}

Response:
{
  "estimated_price": 85.32
}

---

## 🖥️ Frontend Features

- Clean and user-friendly UI
- Location dropdown dynamically loaded from backend
- Real-time house price prediction
- Responsive design

---

## 🛠️ Technologies Used

Backend:
- Python
- Flask
- Flask-CORS
- NumPy
- scikit-learn

Frontend:
- HTML
- CSS
- JavaScript
- jQuery

Tools:
- Jupyter Notebook
- Git & GitHub
- Pickle

---

## ▶️ How to Run the Project Locally

1. Clone the repository:
git clone https://github.com/<your-username>/BangaloreHomePrices.git
cd BangaloreHomePrices

2. Create and activate virtual environment:
python -m venv venv
venv\Scripts\activate

3. Install dependencies:
pip install -r requirements.txt

4. Run Flask backend:
cd server
python server.py

Server runs at:
http://127.0.0.1:5000

5. Open frontend:
Open client/app.html in a browser or use Live Server.

---

## 🌐 Deployment Plan

- Backend: Render / Railway
- Frontend: Vercel
- Model: Loaded from Pickle file

---

## 📌 Key Learnings

- End-to-end ML project lifecycle
- REST API development using Flask
- Handling CORS issues
- Frontend–Backend integration
- Real-world ML deployment concepts

---

## 👨‍💻 Author

Sandeep A  
GitHub: https://github.com/sandeep1712004  

---

## 📜 License

This project is for educational purposes only.
