import '../assets/css/right.css'
import { useState } from 'react'
import { Country_status,Spreads } from './right/Country_status'
const Right = () =>{
    const [spread,setspread] = useState("TT")
    return (<div className="right_outer">
        <Country_status   />
        <Spreads spread={spread} setspread={setspread} />
    </div>
)}
export default Right