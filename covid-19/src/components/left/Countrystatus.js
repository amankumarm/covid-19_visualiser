import { useState,useEffect } from "react"
import axios from 'axios'
import { flaskgetall } from "../../constants"
const CountryStat=()=>{
    const [data,setdata]=useState({})
    const getDate=()=>{
        return
    }

    useEffect(() => {
        var a=localStorage.getItem("data")
        if(a==null){
            axios.get(flaskgetall)
            .then(res=>{
                localStorage.setItem('data',JSON.stringify(res.data))
                setdata(res.data)
            })
            .catch(err=>console.log(err))
            console.log("data",data)
        }
        else{
            const
        }
    }, [data]);
    return(
        <>
    </>
    )
}
export default CountryStat