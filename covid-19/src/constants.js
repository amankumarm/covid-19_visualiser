const client='http://localhost:5000'
const host_global="https://cov-flask.herokuapp.com"
const host_local=client
const flaskgetall=host_local
const flaskgetstatedaily=`${host_local}getstatedaily`
const flaskgetstateall=`${host_local}/getstateall`
const flaskgetstatehistory=`${host_local}/getstatesdailydata?state=`
const flaskgetstatehistory_mob=`${host_local}/getstatesdailydata_mob?state=`
const flaskgetallstatehistory=`${host_local}/getallstate_onemonth`
module.exports={client,flaskgetstatehistory_mob,flaskgetstatedaily,flaskgetallstatehistory,flaskgetstateall,flaskgetall,flaskgetstatehistory}
