
import React from 'react'
import * as api from '../api'

export const packPayment=(name,email,amount)=>async(dispatch)=>{

    try {
        //const {data}=await api.packPayment(name,email,amount);
        console.log(window)

        //dispatch({type:"PAY_PAYMENT",payload:data})

    } catch (error) {
        console.log(error)
    }
}