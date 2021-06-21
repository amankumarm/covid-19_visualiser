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
    return states
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
        json.dump(needed, fp,  indent=4)    #remove this in prod
    return needed
# get_all_states_daily_data()
# get_total_data()

def get_total_data_of_states():
    state=[]
    confirmed=[]
    active=[]
    deceased=[]
    recovered=[]
    lm=[]
    req = requests.get("https://api.covid19india.org/csv/latest/state_wise.csv")
    url_content = req.content
    csv_file = open('updated_state.csv', 'wb')
    csv_file.write(url_content)
    csv_file.close()
    with open('updated_state.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for i in reader:
            state.append(i['State'])
            confirmed.append(i['Confirmed'])
            active.append(i['Active'])
            deceased.append(i['Deaths'])
            recovered.append(i['Recovered'])
            lm.append(i['Last_Updated_Time'])
    final={'ac':active,'dec':deceased,'co':confirmed,'re':recovered,'s':state,'lastm':lm}
    return final
# get_total_data_of_states()
def get_total_data_of_states1():
    req = requests.get("https://api.covid19india.org/csv/latest/state_wise.csv")
    url_content = req.content
    csv_file = open('updated_state.csv', 'wb')
    csv_file.write(url_content)
    csv_file.close()
    final=[]
    with open('updated_state.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for i in reader:
            i.pop("Migrated_Other")
            i.pop("State_code")
            i.pop("Delta_Confirmed")
            i.pop("Delta_Recovered")
            i.pop("Delta_Deaths")
            i.pop("State_Notes")
            final.append(i)
    return final
    # print(final)
get_total_data_of_states1() 

    