import csv
import json
import time
import requests
start_time = time.time()

def get_all_states_daily_data():
    req = requests.get("https://api.covid19india.org/csv/latest/state_wise_daily.csv")
    url_content = req.content
    csv_file = open('downloaded.csv', 'wb')
    csv_file.write(url_content)
    csv_file.close()


    needed=[]
    with open('downloaded.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for i in reader:
            needed.append(i)            
    state_code=['TT', 'AN', 'AP', 'AR', 'AS', 'BR', 'CH', 'CT', 'DN', 'DD', 'DL', 'GA', 'GJ', 'HR', 'HP', 'JK', 'JH', 'KA', 'KL', 'LA', 'LD', 'MP', 'MH', 'MN', 'ML', 'MZ', 'NL', 'OR', 'PY', 'PB', 'RJ', 'SK', 'TN', 'TG', 'TR', 'UP', 'UT', 'WB', 'UN']
    needed=needed[len(needed)-90:]
    states={i:{} for i in state_code}
    # print(len(state_code))
    all_data={}
    k=0
    for i in needed:
        date=i['Date_YMD']
        for j in state_code:
            states[j][date]={'Confirmed':0,'Recovered':0,'Deceased':0}
    for i in needed:
        date=i['Date_YMD']
        status=i['Status']
        fstatus=str(date+'/'+status)
        for j in state_code:
            # states[j][date]={}
            # states[j][date][status]={}
            states[j][date][status]=needed[k][j]
        k=k+1
    with open('data.json', 'w') as fp:
        json.dump(states, fp,  indent=4)
    # for i in needed:
# get_all_states_daily_data()
def get_total_data():
    req = requests.get("https://api.covid19india.org/csv/latest/case_time_series.csv")
    url_content = req.content
    csv_file = open('total.csv', 'wb')
    csv_file.write(url_content)
    csv_file.close()
    needed=[]
    with open('total.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for i in reader:
            needed.append(i)  
    needed=needed[len(needed)-1]
    with open('total.json', 'w') as fp:
        json.dump(needed, fp,  indent=4)
get_all_states_daily_data()
get_total_data()
print("--- %s seconds ---" % (time.time() - start_time))
