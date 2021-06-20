import '../assets/css/left.css'
import Search from './left/searchbox'
import CountryStat  from './left/Countrystatus'
const Left = () =>(
    <div className="left_outer">
        <Search />
        <CountryStat />
    </div>
)
export default Left