import axios from "axios";
import { useEffect, useState } from "react";
import  Home from "./components/home";
import {flaskgetallstatehistory} from "./constants"
import "../src/assets/css/med_q.css"
const App=()=> {
const [alldata,setalldata]=useState({})
useEffect(()=>{
    // console.log(flaskgetallstatehistory)
    axios.get(flaskgetallstatehistory)
    .then(res=>{
        localStorage.setItem("all_state_month",JSON.stringify(res.data))
        setalldata(res.data)
    })
    .catch(err=>console.log(err))
},[])
return(
<div>
    <Home setalldata={setalldata}/>
</div>
)}
export default App