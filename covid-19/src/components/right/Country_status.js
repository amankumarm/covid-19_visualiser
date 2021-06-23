import '../../assets/css/right.css'
import {useEffect,useState} from 'react'
import MyResponsiveLine from './a'
import axios from 'axios'
import {flaskgetcontryhistory} from '../../constants'
export const Country_status=()=>(
    <div className="country_status col-grey">
	<div className="ind col-red"><h2>India</h2>
	<p>Today</p></div>
	<div className="i2">Tested
39,40,72,142
As of 21 June
per source</div>    	
    </div>
)





export const Spreads=()=>{
    const [confd,setconfd]=useState([])
    const [act,setact]=useState([])
    const [rec,setrec]=useState([])   
    const [det,setdet]=useState([])   
    const [tickc,settickc]=useState({x:[],y:[]})
    const [ticka,setticka]=useState({x:[],y:[]})
    const [tickr,settickr]=useState({x:[],y:[]})
    const [tickd,settickd]=useState({x:[],y:[]})    
    const get_in_required_format=(g)=>{
    	 var a=g
    	 var data=[]
    	 for(let i=0;i<a.length;i++){
    	 data.push({"x":Object.keys(a[i])[0],"y":Object.values(a[i])[0]})
    	 }
    	 
	return data    	
    }
    
    const get_tick_values=(g)=>{
    	const inc=g
    	var ticks={x:[],y:[]}
    	ticks.x.push(Object.keys(inc[0])[0])
    	ticks.x.push(Object.keys(inc[Math.floor(inc.length/4)])[0])
    	ticks.x.push(Object.keys(inc[Math.floor(inc.length/2)])[0])
    	ticks.x.push(Object.keys(inc[Math.floor(inc.length*(3/4))])[0])
    	ticks.x.push(Object.keys(inc[Math.floor(inc.length-1)])[0])
    	
    	ticks.y.push(Object.values(inc[0])[0])
    	ticks.y.push(Object.values(inc[Math.floor(inc.length/4)])[0])
    	ticks.y.push(Object.values(inc[Math.floor(inc.length/2)])[0])
    	ticks.y.push(Object.values(inc[Math.floor(inc.length*(3/4))])[0])
    	ticks.y.push(Object.values(inc[Math.floor(inc.length-1)])[0])
    	return ticks
    	
    }
    useEffect(()=>{
    axios.get(flaskgetcontryhistory)
    .then(res=>{
    	const inc_data=res.data
	get_tick_values(res.data.a)
    	setconfd([{id:"Confirmed",data:get_in_required_format(res.data.c)}])
	setact([{id:"Active",data:get_in_required_format(res.data.a)}])
	setrec([{id:"Recovered",data:get_in_required_format(res.data.r)}])
	setdet([{id:"Deaths",data:get_in_required_format(res.data.d)}])
	setticka(get_tick_values(res.data.a))
	settickc(get_tick_values(res.data.c))
	settickd(get_tick_values(res.data.d))
	settickr(get_tick_values(res.data.r))
	})
	    	
    .catch(err=>console.log(err))
    
    },[])
    
    const c_op={
        theme_bg:"#331327",
        theme_b:"#351327",
        theme_fc:"#ff073a",
        col_sc:'set1'
    }
    const a_op={
        theme_bg:"#132240",
        theme_fc:"#007BFF",
        col_sc:'category10'
    }
    
    const r_op={
        theme_bg:"#182828",
        theme_fc:"#27A544",
        col_sc:'dark2'
    }
    const d_op={
        theme_bg:"#1C1C2B",
        theme_fc:"#666F77",
        col_sc:'nivo'
    }

    return (<div className="spreads test">

        <div className="sp_">
        <MyResponsiveLine data={confd} tv={tickc} conf={c_op}/>
        </div>
        <div className="sp_">
        <MyResponsiveLine data={act} tv={ticka} conf={a_op}/>
        </div>
         <div className="sp_">
        <MyResponsiveLine data={rec} tv={tickr} conf={r_op}/>
        </div>
        <div className="sp_">
        <MyResponsiveLine data={det}  tv={tickd} conf={d_op}/>
        </div> 

        
    </div>)
}
