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
   print(get_state_lastmonth(formobile=False))
   a=json.dumps(f,indent=4)
   return a 
@app.route('/getstatesdailydata_mob')
def func5():  #works
   if(request.args.get('state')=='TT'):
      f=get_total_data()
      a=json.dumps(f,indent=4)
      return a
   f=get_state_lastmonth(formobile=True)[request.args.get('state')]
   print(get_state_lastmonth(formobile=True))
   a=json.dumps(f,indent=4)
   return a 


# @app.route('/getallstate_onemonth')
# def f4():
#    f=get_state_lastmonth()
#    a=json.dumps(f,indent=4)
#    return a 

if __name__ == '__main__':
   app.run(debug=True)
   
