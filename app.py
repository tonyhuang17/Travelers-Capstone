from flask import Flask, request, jsonify, render_template
import os
import pandas as pd
import joblib
from flask_cors import CORS


df = pd.read_json("updated_products.json")
features = ["price", "rating", "category", "brand"]

app = Flask(__name__)
CORS(app)

@app.route("/recommend", methods=["POST"])
def recommend_products():
    body = request.get_json()
    # parsed_data = json.loads(body)


    product_id = body.get("product_id")

    print(product_id)

    if not product_id:
        return jsonify({"error": "Please provide a product_id parameter"}), 400

    # Load model
    if not os.path.exists("nearest_neighbors_model.pkl"):
        return jsonify({"error": "Model file not found"}), 500

    nn_model, preprocessor, df = joblib.load("nearest_neighbors_model.pkl")

    # Convert product_id to integer
    try:
        product_id = int(product_id)
    except ValueError:
        return jsonify({"error": "Invalid product_id"}), 400

    # Find product index
    product_idx = df[df["id"] == product_id].index
    if len(product_idx) == 0:
        return jsonify({"error": "Product not found!"}), 404

    product_idx = product_idx[0]

    # Transform product features
    product_features = preprocessor.transform(df.loc[[product_idx], features])

    # Get nearest neighbors
    distances, indices = nn_model.kneighbors(product_features, n_neighbors=6)

    # Retrieve recommended product IDs (excluding the clicked product itself)
    recommended_products = df.iloc[indices[0][1:]][["id", "name", "brand", "category", "price"]].to_dict(orient="records")

    return jsonify(recommended_products)

if __name__ == "__main__":
    app.run(debug=True)