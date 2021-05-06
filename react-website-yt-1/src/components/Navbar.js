import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
const [click,setClick] =useState(false);   
const handleClick =()=>setClick(!click);
const closeMobileMenu = () => SetClick(false);

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
            <ul className= {click?'nav-menu active': 'nave-menu'}/>
                <li className='nav-item'>
                <Link to ='/' className='nav-links' onClick={closeMobileMenu}/>
                Home
                </li>
        </div>
    </nav>
       </>
    )
}

export default Navbar
