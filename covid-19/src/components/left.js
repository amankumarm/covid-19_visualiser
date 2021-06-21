import '../assets/css/left.css'
import Search from './left/searchbox'
import CountryStat  from './left/Countrystatus'
import Statetable from './left/statetable'
import { useState } from 'react'
const Left = () =>{
    const [alldata,setdata]=useState({c:0,a:0,r:0,d:0})
    return(<div className="left_outer">
        <Search />
        <CountryStat alldata={alldata}/>
        <Statetable setalldata={setdata} />
    </div>)
}
export default Left