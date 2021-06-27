from flask import Flask
from flask import request
import json
from flask_cors import CORS
from pivot import get_total_data_of_states1,get_all_states_daily_data,get_total_data,get_state_lastmonth
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
@app.route('/getstatesdailydata')
def func3():  #works
   if(request.args.get('state')=='TT'):
      f=get_total_data()
      a=json.dumps(f,indent=4)
      return a
   f=get_state_lastmonth()[request.args.get('state')]
   a=json.dumps(f,indent=4)
   return a 

# @app.route('/gg')
# def func4():  #works
#    f=get_state_lastmonth()
#    # return f
#    a=json.dumps(f,indent=4)
#    return a 
#    # return "hi"
if __name__ == '__main__':
   app.run(debug=True)
   
