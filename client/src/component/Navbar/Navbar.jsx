import React ,{useEffect}from 'react'
import './Navbar.css'
import {useDispatch, useSelector} from 'react-redux'
import{Link,useNavigate} from  'react-router-dom'
import logo from '../../assest/main.png'
import search from '../../assest/search.png'
import Avatar from '../../component/Avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser'
import decode from 'jwt-decode'




 const Navbar = () => {
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    var User =useSelector((state)=>(state.currentUserReducer))

    const handleLogout=()=>{
        dispatch({type:'LOGOUT'});
        Navigate('/')
        dispatch(setCurrentUser(null))
    }



    useEffect(()=>{
        const token =User?.token
        if(token){
            const decodeToken=decode(token)
            if(decodeToken.exp*1000<new Date().getTime()){
                handleLogout();
        }
    }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))

    },[dispatch])
  return (
 <nav className='main-nav'>

    <div className='navbar'>
        <Link to='/'className='nav-item nav-logo'>
            <img src={logo} alt='logo' width="150" height="70px"/>
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Product</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form >
            <input type="text" placeholder='Search...'/>
            <img src={search} alt="search"  width="25"className='search-icon' />
        </form>
        {User ===null ?
        <Link to='/Auth' className='nav-item nav-link'>Log in</Link>:
        <>
        <Avatar backgroundColor='#009dff' px="15px" py="8px" borderRadius="50%" color="white" cursor="pointer" fontSize="36"><Link to={`/Users/${User?.result._id}`}style={{color:"white", textDecoration :'none', fontSize:"24px",padding:"20px 7px"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
        <button className='nav-item nav-link' onClick={handleLogout}>Log out</button>
        </>
 }
    </div>
 </nav>
  )
}
export default Navbar
