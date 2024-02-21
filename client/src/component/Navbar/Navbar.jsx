import React ,{useEffect, useState}from 'react'
import './Navbar.css'
import {useDispatch, useSelector} from 'react-redux'
import{Link,useNavigate} from  'react-router-dom'
import logo from '../../assest/main.png'
import search from '../../assest/search.png'
import Avatar from '../../component/Avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser'
import decode from 'jwt-decode'
import  translation from '../languageData.json'








 const Navbar = () => {
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    const [language,setLanguag]=useState('english')
    let [content,setContent]=useState({})
    var lang =useSelector((state)=>(state.setLanguage))
    console.log(lang)
    
    const [location,setLocation]=useState('');
    var User =useSelector((state)=>(state.currentUserReducer))
    


    const handleLogout=()=>{
        dispatch({type:'LOGOUT'});
        Navigate('/')
        dispatch(setCurrentUser(null))
    }
       const getLocation=()=>{
            navigator.geolocation.getCurrentPosition((position)=>{
                const {latitude,longitude}=position.coords;
                
              
                const url=`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
                fetch(url).then(res=>res.json()).then(data=>{
                    const city = data.address.city;
                    const country=data.address.country;
                    setLocation({city,country});
                   
                 
                }).catch(()=>{
                    console.log('error occured')
                })

                


            
        })
    }
    let changeLanguage=(e)=>{
        setLanguag=e.target.value
        dispatch({type:'SET_LANGUAGE',payload:language})
           
        if(language==='english'){
            setContent(translation.english)
            
            
    
        }
        else if(language==='hindi'){
            setContent(translation.hindi)
        }


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
        getLocation();
     
     

    },[dispatch])
  return (
 <nav className='main-nav'>

    <div className='navbar'>
        <Link to='/'className='nav-item nav-logo'>
            <img src={logo} alt='logo' width="150" height="70px"/>
        </Link>
        <Link to='/' className='nav-item nav-btn'>{content.about}</Link>
        <Link to='/Product' className='nav-item nav-btn'>{content.product}</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form >
            <input type="text" placeholder='Search...'/>
            <img src={search} alt="search"  width="25"className='search-icon' />
        </form>
        {User ===null ?
        <Link to='/Auth' className='nav-item nav-link'>{content.login}</Link>:
        <>
        <Avatar backgroundColor='#009dff' px="15px" py="8px" borderRadius="50%" color="white" cursor="pointer" fontSize="36"><Link to={`/Users/${User?.result._id}`}style={{color:"white", textDecoration :'none', fontSize:"24px",padding:"20px 7px"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
        <button className='nav-item nav-link' onClick={handleLogout}>{content.logout}</button>


  <Link><h4>{location.city},{location.country}</h4></Link>
  <Link to="/loginHistory" >{content.loginhistory}</Link>
  <Link><select value={language} onChange={changeLanguage}>
    <option value="english">English</option>
    <option value="hindi">Hindi</option>
    <option value="french">French</option>
    <option value="urdu">Urdu</option>
    <option value="tamil">Tamil</option>
    </select></Link>


  
        
        </>
 }
    </div>
 </nav>

  )
}
export default Navbar
