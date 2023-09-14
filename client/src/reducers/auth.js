const authReducer=(state={data:null},action)=>{

    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
            return {...state,data: action?.data}
            
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, data: null };
        // case 'UPDATE_DATE':
        //      localStorage.setItem('profile',JSON.stringify({...action?.data}))
        //     return {...state,data: action?.data}
        // case'UPDATE_PACK':
        // localStorage.setItem('profile',JSON.stringify({...action?.data}))
        // return {...state,data: action?.data}
      
    
        default:
            return state
        
    }
}
export default authReducer