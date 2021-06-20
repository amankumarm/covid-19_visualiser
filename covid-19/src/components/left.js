import '../assets/css/left.css'
import Search from './left/searchbox'
import CountryStat  from './left/Countrystatus'
import Statetable from './left/statetable'
const Left = () =>(
    <div className="left_outer">
        <Search />
        <CountryStat />
        <Statetable />
    </div>
)
export default Left