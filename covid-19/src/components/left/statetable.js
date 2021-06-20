import {useState,useEffect} from 'react'
import axios from 'axios'
import { flaskgetstateall } from '../../constants'
const Statetable=()=>{
    const [states,setstate] = useState([])
    const [conf,setconf] = useState([])
    const [act,setact] = useState([])
    const [rec,setrec] = useState([])
    const [deaths,setdeaths] = useState([])
    const [lm,setlm] = useState([])
    
    useEffect(()=>{
        axios.get(flaskgetstateall)
        .then(res=>{
            var data=res.data
            setstate(data.s)
            setconf(data.co)
            setact(data.ac)
            setrec(data.re)
            setdeaths(data.dec)
            setlm(data.lastm)
        })
        .catch(err=>console.log(err))


    },[])

    return(
       <div className="Table-container">
           <div className="col col-grey col-1">
               <div className="head">State / UT</div>
               {
                   states.map(item=>(<div className="item">{item}</div>))
               }
               
               
           </div>

           <div className="col col-grey col-2">
                <div className="head">Confirmed</div>
               {
                   conf.map(item=>(<div className="item">{item}</div>))
               }
           </div>
           <div className="col col-grey col-2">
                <div className="head">Active</div>
                {
                   act.map(item=>(<div className="item">{item}</div>))
                }
           </div>
           <div className="col col-grey col-2">
                <div className="head">Recoverd</div>
                {
                     rec.map(item=>(<div className="item">{item}</div>))
                }
           </div><div className="col col-grey col-2">
                <div className="head">Deceased</div>
                {
                     deaths.map(item=>(<div className="item">{item}</div>))
                }
           </div>
           <div className="col col-grey col-2">
                <div className="head nw">Last - modified</div>
                {
                    lm.map(item=>(<div className="item nw">{item}</div>))
                }
           </div>
       </div>
    )
}
export default Statetable