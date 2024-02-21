import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './logindetail.css'

const LoginHistoty = () => {
  const historyList=useSelector((state)=>(state.historyReducer))
  const User=useSelector((state)=>(state.currentUserReducer))
  const [location,setLocation]=useState();
  const email=User?.result.email
  console.log(historyList)
 
  const getLocation=(latitude,longitude)=>{
   var lat=Number(latitude);
    var long=Number(longitude)
      
        const url=`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`;
        fetch(url).then(res=>res.json()).then(data=>{
            const city = data.address.city;
            const country=data.address.country;
            setLocation({city,country});
            console(city,country)
           
         
        }).catch(()=>{
            console.log('error occured')
        })

        


    
}

  
  return (

    <div className='product-container-1'>LoginHistoty
    {
      historyList.data===null?<h1>Loading....</h1>:

      <>
      {
      
        historyList.data.filter(History=>History.email==email).map(History=>(
          

      <div>
        <div className='product-container-2'>
          {getLocation(History.lat,History.long)}
            login on : {History.loginOn},login device : {History.device}   ,OS : {History.os}   ,browser :{History.browser}  ,IP address : {History.ipAddress}, loginAt : {};
           </div>
          
           </div>
))
        }


           </>
}
    </div>
  )
}

export default LoginHistoty