import {useState,useEffect} from 'react'
import axios from 'axios'
import { flaskgetstateall } from '../../constants'
import { make_it_indian } from '../../assets/test'
const Statetable=({setalldata})=>{
    const [data,setdata] = useState([])
    
    useEffect(()=>{
        axios.get(flaskgetstateall)
        .then(res=>{
            var data=res.data
            console.log("data",data)
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                element.Confirmed=make_it_indian(element.Confirmed)
                element.Active=make_it_indian(element.Active)
                element.Deaths=make_it_indian(element.Deaths)
                element.Recovered=make_it_indian(element.Recovered)
            }
            setdata(data)
            var alldata=data[0]
            var rec={c:alldata['Confirmed'],a:alldata['Active'],r:alldata['Recovered'],d:alldata['Deaths']}
            console.log(rec)
            setalldata(rec)
        })
        .catch(err=>console.log(err))
    },[])

    return(
       <div className="Table-container ">
           <div className="row ">
               <div className="col-3 head col-grey ">State / UT</div>
               <div className="col head col-grey">Confirmed</div>
               <div className="col head col-grey">Active</div>
               <div className="col head col-grey">Recoverd</div>
               <div className="col head col-grey">Desceased</div>
               <div className="col-2 head col-grey">Last Updated</div>
           </div>

            {
                data.map((item,id)=>(
                        <div className="row" key={id}>
                        {
                            Object.values(item).map((inside,ni)=>{
                                if(ni===0){
                                return(<div className={`col-3 head col-grey tog-${id%2}`} key={ni}>{inside}</div>
                                )
                                }
                                if(ni===5){
                                    return(<div className={`col-2 head col-grey tog-${id%2}`} key={ni}>{inside}</div>
                                    )
                                    }
    
                                return(
                                <div className={`col head col-grey tog-${id%2}`} key={ni}>{inside}</div>
                            )})
                        }
                        </div>
        ))
            }
       </div>
    )
}
export default Statetable