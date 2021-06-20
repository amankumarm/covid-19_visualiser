const Statetable=()=>{
    
    return(
       <div className="Table-container">
           <div className="col col-grey col-1">
               <div className="head">State / UT</div>
               <div className="item">Karnataka</div>
           </div>

           <div className="col col-grey col-2">
                <div className="head">Confirmed</div>
               <div className="item">120000</div>
           </div>
           <div className="col col-grey col-2">
                <div className="head">Active</div>
               <div className="item">120000</div>
           </div><div className="col col-grey col-2">
                <div className="head">Recoverd</div>
               <div className="item">120000</div>
           </div><div className="col col-grey col-2">
                <div className="head">Deceased</div>
               <div className="item">120</div>
           </div>
           <div className="col col-grey col-2">
                <div className="head">Last - modified</div>
               <div className="item">21/02/21 19:00</div>
           </div>
       </div>
    )
}
export default Statetable