import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
const [click,setClick] =useState(false);   
const handleClick =()=>setClick(!click);
const closeMobileMenu = () => setClick(false);

    return (
       <>
    <nav className ="navbar">
        <div className ="navbar-container">
            <Link to ="/" className="navbar-logo"> 
            TRVL <i class='fab fa-typo3' />
            </Link>
           <div className ='menu-icon' onClick={handleClick}>
               <i class={click ? 'fas fa-times':'fas fa-bars'}/>
           </div>
            <ul className= {click?'nav-menu active': 'nave-menu'}>
                <li className='nav-item'>
                    <Link to ='/' className='nav-links' onClick={closeMobileMenu}/>
                    Home
                </li>
                <li className='nav-item'>
                    <Link to ='/services' className='nav-links' onClick={closeMobileMenu}/>
                    Services
                </li>
                <li className='nav-item'>
                    <Link to ='/products' className='nav-links' onClick={closeMobileMenu}/>
                    Products
                </li>
                <li className='nav-item'>
                    <Link to ='/sign-up' className='nav-links' onClick={closeMobileMenu}/>
                   Sign Up
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
       </>
    )
}

export default Navbar
