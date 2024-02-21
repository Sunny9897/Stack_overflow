import{combineReducers} from 'redux'
import authReducer from './auth'
import currentUserReducer from './currentUser'
import questionReducer from './questions'
import usersReducer from './users'
import paymentReducer from './payment'
import updateUserReducer from './updateUser'
import ipReducer from './ipAddress'
import historyReducer from './LoginHistory'
import setLanguage from './setLanguage'

export default combineReducers({
    authReducer,currentUserReducer,questionReducer,usersReducer,paymentReducer,updateUserReducer,historyReducer,ipReducer,setLanguage,

})