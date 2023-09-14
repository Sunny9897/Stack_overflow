import * as api from '../api'


export const getLoginHistory=()=>async(dispatch)=>{
    const {data}=await api.getLoginHistory();
    dispatch({type:'LOGIN_HISTORY',payload:data})
    console.log(data)

}
export const getIpAddress=()=>async(dispatch)=>{
    const {data}=await api.getIpAddress();
    dispatch({type:'IP_ADDRESS',payload:data})
    console.log(data)
}