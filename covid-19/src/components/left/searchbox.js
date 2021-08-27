import { useState,useRef } from 'react'
import '../../assets/css/left.css'
import Statel from './statel'
import search from '../../assets/img/search.png'
import state_array from '../../state_data.json'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var a=new Date().toLocaleString()

function SearchBox() { 
    const [Focus,setFocus] = useState(false)
    const [Date,setDate]= useState(a)
    const toastId = useRef(null);
    const changeHandler=(e)=>{
        toastId.current=toast.dark("This feature needs to be implemented yet :))",{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId:'AKM'    
        })
    }
    if (Focus) {
        return(
        <div className="sb_outer">
            <p>Search Your State</p>
            <div className="myinput">
                <img  src={search} />
                <input type="text" onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onChange={changeHandler}/>
                <datalist id="state">
                    {
                        state_array.map((item,index)=>(<option value="Karnataka" key={index} />))
                    }
                </datalist>
            </div>
            <p>{Date}</p>
            <Statel/> 
            <ToastContainer />
        </div>

        )       
    }
    else{
    return(
    <div className="sb_outer">
        <p>Search Your State</p>
        <div className="myinput">
            <img  src={search} />
            <input type="text" onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} list="state" name="state" id="state" />
                <datalist id="state">
                    {
                        state_array.map((item,index)=>(<option value="Karnata" key={index}></option>))
                    }
                </datalist>
        </div>
        <p>{Date}</p>
        <ToastContainer />

    </div>
)
    }
}
export default SearchBox
