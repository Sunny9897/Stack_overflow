import React from 'react'
import './LeftSidebar.css'
import{NavLink} from 'react-router-dom'
import Globe from '../../assest/globe.png'


const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeClass='active'>
            <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div>
                    <p>Public</p>
                    <NavLink to='/Questions' className='side-nav-links' activeClass='active'>
                        <img src={Globe} alt="globe" style={{height:"25px", marginLeft:"-40px"}} />
                        <p style={{paddingLeft:"10px"}}> Questions</p>
                    </NavLink>
                    <NavLink to='/Tags' className="side-nav-links"  activeClass='active' >
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className="side-nav-links"  activeClass='active' >
                        <p>Users</p>
                    </NavLink>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default LeftSidebar