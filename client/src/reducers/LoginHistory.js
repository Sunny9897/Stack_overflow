const historyReducer=(state={data:null},action)=>{
    switch(action.type){
        case 'GET_LOGIN_HISTORY':
            return{...state,data:action.payload}

            default:
                return state;
    }
}
export default historyReducer