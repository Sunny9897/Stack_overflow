const ipReducer=(state={data:null},action)=>{
    switch(action.type){
        case 'IP_ADDRESS':
            return action.payload

            default:
                return state
    }
}
export default ipReducer