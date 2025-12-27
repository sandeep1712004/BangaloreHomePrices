from flask import Flask, request, jsonify
from flask_cors import CORS
import util

app = Flask(__name__)
CORS(app)


@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    return jsonify({
        "locations": util.get_location_names()
    })


@app.route('/predict_home_price', methods=['GET','POST'])
def predict_home_price():
    """
    Accepts JSON input ONLY.
    Works with Postman, curl, frontend.
    """

    # Safely parse JSON (no 415 / 400 crashes)
    data = request.get_json(force=True, silent=True)

    if data is None:
        return jsonify({
            "error": "Request body must be valid JSON"
        }), 400

    # Validate required fields
    required_fields = ['location', 'total_sqft', 'bhk', 'bath']
    for field in required_fields:
        if field not in data:
            return jsonify({
                "error": f"Missing field: {field}"
            }), 400

    try:
        location = data['location']
        total_sqft = float(data['total_sqft'])
        bhk = int(data['bhk'])
        bath = int(data['bath'])
    except ValueError:
        return jsonify({
            "error": "Invalid data type for sqft/bhk/bath"
        }), 400

    # Predict price
    estimated_price = util.get_estimated_price(
        location, total_sqft, bhk, bath
    )

    return jsonify({
        "estimated_price": estimated_price
    })


if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    app.run(debug=True)
