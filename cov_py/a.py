import csv
import json
state=[]
with open('updated_state.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for i in reader:
            state.append({i['State']:i['State_code']})
with open("state_data.json", "w") as outfile: 
    json.dump(state, outfile,indent=4)
print(state)