const client='localhost:3000'
const host_global="https://cov-flask.herokuapp.com"
const host_local=host_global
const flaskgetall=host_local
const flaskgetstatedaily=`${host_local}getstatedaily`
const flaskgetstateall=`${host_local}/getstateall`
const flaskgetstatehistory=`${host_local}/getstatesdailydata?state=`
const flaskgetallstatehistory=`${host_local}/getallstate_onemonth`
module.exports={client,flaskgetstatedaily,flaskgetallstatehistory,flaskgetstateall,flaskgetall,flaskgetstatehistory}
