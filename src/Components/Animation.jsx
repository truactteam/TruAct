import React from 'react';
import Lottie from "lottie-react";
import '../Styles/Animation.css';
import { useNavigate } from 'react-router-dom';

const Animation = ({animationData, heading, Something1, Link1, Link2, reverse}) => {
  const navigate = useNavigate();
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
        <div className='mainContaier' style={{flexDirection:`${reverse}`, backgroundColor:'black'}}>
                    <div className='animation2'><Lottie animationData={animationData} loop={true} /></div>
                    <div className='textContainer'>
                        {/* <div className='gradient1'></div> */}
                        <p className='textContainerHeading box-border3'>{heading}</p>
                        <div className='detailContainer'>
                            <p className='textContainerDetails'>{Something1}</p>
                            <div className='linkButtonContainer'>
                              <p className='linkButton1' onClick={()=>navigate(`/${Link1}`)}>Learn More</p>
                              <p className='linkButton2' onClick={()=>navigate(`/${Link2}`)}>Get Started</p>
                            </div>
                        </div>
                    </div>
        </div>
              <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    {/* <div style={{borderBottom:'2px solid #6297fe', width: '100%', margin:'20px 0px'}}></div> */}
              </div>
    </div>
  )
}

export default Animation