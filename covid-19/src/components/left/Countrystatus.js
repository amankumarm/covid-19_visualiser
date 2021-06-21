import '../../assets/css/left.css'
const CountryStat=({alldata})=>{
    return(
            <div className="c_status">
                <div className="all_i_card col-red cr"><p>Confirmed</p><span>{alldata.c}</span></div>
                <div className="all_i_card col-blu cb"><p >Active</p><span>{alldata.a}</span></div>
                <div className="all_i_card col-green cg"><p>Recovered</p><span>{alldata.r}</span></div>
                <div className="all_i_card col-grey cgr"><p>Desceased</p><span>{alldata.d}</span></div>

            </div>
        )
}
export default CountryStat