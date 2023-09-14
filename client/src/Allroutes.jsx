import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import Tags  from "./pages/Tags/Tags"
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import Product from './pages/Product/Product'
import PaymentPage from './pages/PaymentPage'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import LoginDetail from './pages/LoginHistoty/LoginDetail'

const Allroutes = () => {
  return (
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Auth' element={<Auth/>}/>
    <Route exact path='/Questions' element={<Questions/>}/>
    <Route exact path='/AskQuestion' element={<AskQuestion/>}/>
    <Route exact path='/Questions/:id' element={<DisplayQuestion/>}/>
    <Route exact path='/Tags' element={<Tags/>}/>
    <Route exact path='/Users' element={<Users/>}/>
    <Route exact path='Users/:id' element={<UserProfile/>}/>
    <Route exact path='/Product' element={<Product/>}/>
    <Route exact path='/Product/payment-success' element={<PaymentPage/>}/>
    <Route exact path='/forgotPassword' element={<ForgotPassword/>}/>
    <Route exact path='/loginHistory' element={<LoginDetail/>}/>

    </Routes>
  )  
}

export default Allroutes