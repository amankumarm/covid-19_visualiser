from flask import Flask
import json
from flask_cors import CORS
from pivot import get_total_data_of_states1,get_all_states_daily_data
app = Flask(__name__)
cors = CORS(app)
@app.route('/getstateall')
def hello_world():
   f=get_total_data_of_states1()
   a=json.dumps(f, indent = 4)
   return a 
@app.route('/getstatedaily')
def g2():
   f=get_all_states_daily_data()
   a=json.dumps(f,indent=4)
   return a
if __name__ == '__main__':
   app.run(debug=True)
   