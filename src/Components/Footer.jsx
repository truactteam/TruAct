import React from 'react';
import '../Styles/Footer.css';
import logo from '../Assets/Image/png_logo.png';
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='mainDivContainer'>

        <div className='container'>
          <div className='forSmallView2'>
          <div className='imgSection'>
            <div className='imgContainer'>
              <img src={logo} alt='logo' className='imglogo'/>
            </div>
            <div className='company'>
              <div>Company</div>
              <div>
                <p>About</p>
                <p>Careers</p>
                <p>Affiliates</p>
              </div>
            </div>
            <div className='contactLogoContainer'>
                <FaFacebook className='contactLogo'/>
                <BsTwitterX className='contactLogo'/>
                <FaGoogle className='contactLogo'/>
            </div>
          </div>

          <div className='section'>
            <div className='section_head'>Resources</div>
            <div className='section_text'>
              <p>Something1</p>
              <p>Something1</p>
              <p>Something1</p>
              <p>Something1</p>
            </div>
          </div>
        </div>

          <div className='vertical_Break'></div>
          
          <div className='forSmallView'>

          <div className='section'>
            <div className='section_head'>Community</div>
            <div className='section_text'>
              <p>Something1</p>
              <p>Something1</p>
              <p>Something1</p>
              <p>Something1</p>
            </div>
          </div>

          <div className='section'>
            <div className='section_head'>Community</div>
            <div className='section_text'>
              <p>Something1</p>
              <p>Something1</p>
              <p>Something1</p>
              <p>Something1</p>
            </div>
          </div>

          </div>

        </div>

        <div className='Horizontal_Break'></div>

        <div className='bottomSection'>
          <div className='bottomSectionText'>
            <p>Privacy Policy</p>&nbsp;&nbsp;<div className='sepration'></div>&nbsp;&nbsp;
            <p>Cookie Policy</p>&nbsp;&nbsp;<div className='sepration'></div>&nbsp;&nbsp;
            <p>Terms</p><div></div>
          </div>
          <div className='bottomSectionText'>
            <p>&#169; TruACT 2024</p>
          </div>
        </div>


    </div>
  )
}

export default Footer