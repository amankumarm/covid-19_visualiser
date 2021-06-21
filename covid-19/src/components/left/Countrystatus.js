import { useState,useEffect } from "react"
// import axios from 'axios'
import '../../assets/css/left.css'
import { flaskgetall } from "../../constants"
const CountryStat=()=>{
    const [data,setdata]=useState({})
    // const getDate=()=>{
    //     return
    // }

    // useEffect(() => {
    //     var a=localStorage.getItem("data")
    //     console.log(a)
    //     if(a==null){
    //         axios.get(flasknpm audit fixgetall)
    //         .then(res=>{
    //             localStorage.setItem('data',JSON.stringify(res.data))
    //             setdata(res.data)
    //         })
    //         .catch(err=>console.log(err))
    //     }else{
    //         setdata(JSON.parse(a))
    //         console.log(data)
        
    //     }

    // }, [data]);
    return(
            <div className="c_status">
                <div className="all_i_card col-red cr"><p>Confirmed</p><span>12,22,500</span></div>
                <div className="all_i_card col-blu cb"><p >Active</p><span>12,22,500</span></div>
                <div className="all_i_card col-green cg"><p>Recovered</p><span>12,22,500</span></div>
                <div className="all_i_card col-grey cgr"><p>Desceased</p><span>12,22,500</span></div>

            </div>
        )
}
export default CountryStat