const Statel=()=>{
    const states=["Karnataka",
"Uttar Pradesh",
"West Bengal",
"Maharashtra",
"Rajasthan",
"Andhra Pradesh",
"Madhya Pradesh",
"Gujarat",
"Bihar",
"Tamil Nadu",

]
    return (
       <div className="Statel_outer">
           <p className="col-blu bold">State/UT</p>
           <div className="left_state">
           {
               states.map((item,index)=>(
                   <div className="ofstate" key={index}> -{item}</div>
               ))
           }
           </div>
       </div>
    )
}
export default Statel
