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
                <div className="all_i_card col-red cr"><h3>Confirmed</h3><span>12,22,500</span></div>
                <div className="all_i_card col-blu cb"><h3 >Active</h3><span>12,22,500</span></div>
                <div className="all_i_card col-green cg"><h3>Recovered</h3><span>12,22,500</span></div>
                <div className="all_i_card col-grey cgr"><h3>Desceased</h3><span>12,22,500</span></div>

            </div>
        )
}
export default CountryStat