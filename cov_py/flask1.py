from flask import Flask
import json
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)
@app.route('/')
def hello_world():
   f= open('total.json')
   return f.read()

if __name__ == '__main__':
   app.run(debug=True)
   