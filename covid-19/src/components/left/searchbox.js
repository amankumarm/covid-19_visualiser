import { useState } from 'react'
import '../../assets/css/left.css'
import Statel from './statel'
import search from '../../assets/img/search.png'
var a=new Date().toLocaleString()
function SearchBox() { 
    const [Focus,setFocus] = useState(false)
    const [Date,setDate]= useState(a)
    if (Focus) {
        return(
        <div className="sb_outer">
            <p>Search Your State</p>
            <div className="myinput">
                <img  src={search} />
                <input type="text" onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} />
            </div>
            <p>{Date}</p>
            <Statel/> 
        </div>
        )       
    }
    else{
    return(
    <div className="sb_outer">
        <p>Search Your State</p>
        <div className="myinput">
            <img  src={search} />
            <input type="text" onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} />
        </div>
        <p>{Date}</p>
    </div>
)
    }
}
export default SearchBox
