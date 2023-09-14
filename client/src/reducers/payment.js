const paymentReducer=(state={data:null},action)=>{
    switch(action.type){
        case 'PAY_PAYMENT':
            return {...state}

            default:
                return state
    }
}
export default paymentReducer