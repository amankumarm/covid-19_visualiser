import '../../assets/css/right.css'
import {useEffect,useState,useRef} from 'react'
import MyResponsiveLine from './a'
import axios from 'axios'
import { make_it_indian } from '../../assets/test'
import {flaskgetstatehistory, flaskgetstatehistory_mob} from '../../constants'
import state_name from '../../assets/state_data.json'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Country_status=()=>(
    <div className="country_status col-grey">
	<div className="ind col-red"><h2>India</h2>
	<p>Today</p></div>
	<div className="i2">a Wear Mask announcement.</div>    	
    </div>
)





export const Spreads=({spread,setspread})=>{


    const [confd,setconfd]=useState([])
    const [act,setact]=useState([])
    const [rec,setrec]=useState([])   
    const [det,setdet]=useState([])   
    const [tickc,settickc]=useState({x:[],y:[]})
    const [ticka,setticka]=useState({x:[],y:[]})
    const [tickr,settickr]=useState({x:[],y:[]})
    const [tickd,settickd]=useState({x:[],y:[]})  
    const toastId = useRef(null);
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
        if(inc.length==0){
            var ticks={x:["data not provided"],y:["data not provided"]}
            return ticks
        }
    	var ticks={x:[],y:[]}
    	ticks.x.push(Object.keys(inc[0])[0])
    	ticks.x.push(Object.keys(inc[Math.floor(inc.length/2)])[0])
    	ticks.x.push(Object.keys(inc[Math.floor(inc.length-1)])[0])
    	
    	ticks.y.push(Object.values(inc[0])[0])
    	ticks.y.push(Object.values(inc[Math.floor(inc.length/2)])[0])
    	ticks.y.push(Object.values(inc[Math.floor(inc.length-1)])[0])
    	console.log(ticks)
        return ticks
    	
    }
    useEffect(()=>{
        const notify = () => {
            toastId.current = toast.dark("🦄 Pulling data from the server.", {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                toastId:'AKM'    
            })
          }
        const dismiss = () => {
            toast.dismiss(toastId.current);
        }
        const data_success=()=>{
            toast.dark("🦄 Data fetched ", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                toastId:'AKM1'    
            })
        }
        if (window.innerWidth>700) {
            console.log(window.innerWidth)
            //add loadin modal here
            notify()
            axios.get(flaskgetstatehistory+spread)
            .then(res=>{
            const inc_data=res.data
            console.log(inc_data)
            setconfd([{id:"Confirmed",data:get_in_required_format(res.data.Confirmed)}])
	        setact([{id:"Active",data:get_in_required_format(res.data.Active)}])
	        setrec([{id:"Recovered",data:get_in_required_format(res.data.Recovered)}])
	        setdet([{id:"Deaths",data:get_in_required_format(res.data.Deceased)}])
	        setticka(get_tick_values(res.data.Active))
	        settickc(get_tick_values(res.data.Confirmed))
	        settickd(get_tick_values(res.data.Deceased))
	        settickr(get_tick_values(res.data.Recovered))
            data_success()
            dismiss()

	})
    .catch(err=>{
        toast.warn("🦄 Error occured. Try refreshing  ", {
            position: "top-right",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId:'AKM1'    
        })
        dismiss()
    })
}
    else{
        console.log(window.innerWidth)
        notify()
        axios.get(flaskgetstatehistory_mob+spread)
        .then(res=>{
        const inc_data=res.data
        console.log(inc_data)
        setconfd([{id:"Confirmed",data:get_in_required_format(res.data.Confirmed)}])
        setact([{id:"Active",data:get_in_required_format(res.data.Active)}])
        setrec([{id:"Recovered",data:get_in_required_format(res.data.Recovered)}])
        setdet([{id:"Deaths",data:get_in_required_format(res.data.Deceased)}])
        setticka(get_tick_values(res.data.Active))
        settickc(get_tick_values(res.data.Confirmed))
        settickd(get_tick_values(res.data.Deceased))
        settickr(get_tick_values(res.data.Recovered))
        data_success()
        dismiss()
    })
        .catch(err=>{
            toast.warn("🦄 Error occured. Try refreshing  ", {
                position: "top-right",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                toastId:'AKM1'    
            })
            dismiss()

        })

    }
    },[spread])
    
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
    const selectHandler=(e)=>{
        setspread(e.target.value)
    }
    
   
        
            return (<div className="spreads test">
                <h2 className="col-grey st">Spread Trends*</h2>
        <select onChange={selectHandler} className="select-box col-grey">
            {
                state_name.map((item,index)=>{if(index==0){return(<option value="TT" key={Object.values(item)}>India</option>)} else{return (<option value={Object.values(item)} key={Object.values(item)}>{Object.keys(item)}</option>)}})
            }
        </select>
        <div className="sp_">
        <MyResponsiveLine data={confd} tv={tickc} conf={c_op}/>
        </div>
        {
            ticka.x[0]==="data not provided" ? null :(<div className="sp_">
            <MyResponsiveLine data={act} tv={ticka} conf={a_op}/>
            </div>)
        }
         <div className="sp_">
        <MyResponsiveLine data={rec} tv={tickr} conf={r_op}/>
        </div>
        <div className="sp_">
        <MyResponsiveLine data={det}  tv={tickd} conf={d_op}/>
        </div> 
        <ToastContainer />
        <p className='note'> Note: This Project receives from data from the endpoints provided by <a href='https://www.covid19india.org'>https://www.covid19india.org/</a>,  which stopped updating the endpoints with the data from on 31st October, 2021. :)</p>
    </div>)
        
   

}
