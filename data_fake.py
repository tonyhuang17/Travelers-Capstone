import json
import random
from faker import Faker

fake = Faker()

categories = ["Electronics", "Clothing", "Home", "Sports", "Books", "Toys" ]

products = []
for _ in range(1000):
    products.append({
        "name": fake.sentence(nb_words=2),
        "category":random.choice(categories),
        "description": fake.text(),
        "price": round(random.uniform(5, 500), 2),
        "popularity": random.randint(1, 100),
        "stock": random.randint(0, 500),
        "image": fake.image_url()
    })

with open("products.json", "w") as f:
    json.dump(products, f, indent=4)
 