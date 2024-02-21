import { useState } from 'react';
import * as api from '../api'
import { setCurrentUser } from './currentUser'







export const signup=(authData,navigate)=>async(dispatch)=>{
    try {
        const{data}=await api.signUp(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
        navigate('/')
    } catch (error) {
        
        console.log(error)
    }
}
export const login=(authData,navigate)=>async(dispatch)=>{

    try {
       
                 
                   
                
        const{data}=  await api.logIn(authData)
        console.log(data.result)
        navigator.geolocation.getCurrentPosition(async (position)=>{
            const {latitude,longitude}=position.coords;
            if(data.result._id){
                const  email=data?.result.email;
    
                const {value}=await api.getLoginHistory(email,latitude,longitude);
        
               const history= await  api.getHistory(email);
               console.log(history.data)
              
               dispatch({type:'GET_LOGIN_HISTORY',payload:history.data})
    
              }
      
        })
        
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
        navigate('/')
         
   
    } catch (error) {
        console.log(error)
    }
    
}

export const updateDate=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.updateDate(id);
        dispatch({type:'UPDATE_DATE',payload:data})
        
        
    } catch (error) {
        console.log(error)
    }
}
export const updatePack=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.updatePack(id);
        console.log(data)
        dispatch({type:'UPDATE_PACK',payload:data})
 
        
    } catch (error) {
        console.log(error)
        
    }
}
export const forgotPassword=(email)=>async(dispatch)=>{
    try {
        const {data}=await api.forgotPassword(email);
        if(data===200){
            alert('reset link has been to your mail.')
        }else if(data===401){
            alert("user does not exist")
        }
        else{
            alert("spmething went wrong")
        }
        
    } catch (error) {
        console.log(error)
        
    }
}