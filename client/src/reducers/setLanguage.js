
const setLanguage=(state=null,action)=>{
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {...state,data:action.payload}
        
    
        default:
            return state
    }

}
export default setLanguage