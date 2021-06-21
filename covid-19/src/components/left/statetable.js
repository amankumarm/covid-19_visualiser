import {useState,useEffect} from 'react'
import axios from 'axios'
import { flaskgetstateall } from '../../constants'
const Statetable=()=>{
    const [data,setdata] = useState([])
    
    var a= document.getElementsByClassName('row')
    for(leti=0)
    useEffect(()=>{
        axios.get(flaskgetstateall)
        .then(res=>{
            var data=res.data
            // data.shitf
            setdata(data)
            console.log(data)
        })
        .catch(err=>console.log(err))
    },[])

    return(
       <div className="Table-container test">
           <div className="row ">
               <div className="col head col-grey ">State / UT</div>
               <div className="col head col-grey">Confirmed</div>
               <div className="col head col-grey">Active</div>
               <div className="col head col-grey">Recoverd</div>
               <div className="col head col-grey">Desceased</div>
               <div className="col head col-grey">Last Updated</div>
           </div>

            {
                data.map((item,id)=>(
                        <div className="row" key={id}>
                        {
                            Object.values(item).map((inside,ni)=>(
                                <div className="col head col-grey" key={ni}>{inside}</div>
                            ))
                        }
                        </div>
        ))
            }
       </div>
    )
}
export default Statetable