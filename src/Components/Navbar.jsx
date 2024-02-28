import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/Image/png_logo.png'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
  return (
    <div>
        <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center',}}>
        <div className='navbar'>
            <div className='navbar_icon2' onClick={(()=>{navigate('/')})}><img src={logo} alt='logo' className='img'/> </div>
             <ul className={`navbar_ul ${show ? 'navbar_ul_active':'navbar_ul_inactive'}`}>
                <li className='navbar_li' onClick={(()=>{navigate('/')})}><span className='span1'>HOME</span></li>
                <li className='navbar_li'><a href='#WWD' style={{margin:'0px', padding:'0px'}}><span className='span1'>WWD</span></a></li>
                <li><div className='navbar_icon' onClick={(()=>{navigate('/')})}><img src={logo} alt='logo' className='img'/></div></li>
                <li className='navbar_li' onClick={(()=>{navigate('/about-us')})}><span className='span1'><a href='/about-us'>ABOUT-US</a></span></li>
                <li className='navbar_li' onClick={(()=>{navigate('/portal')})}><span className='span1'>PORTAL</span></li>
            </ul>

            <div onClick={(()=>setShow(!show))} className='hamburger'>
                {
                    show ? (<RxCross2/>):(<GiHamburgerMenu/>)
                }
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar