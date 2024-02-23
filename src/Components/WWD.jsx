import React from 'react';
import '../Styles/WWD.css'
import Lottie from 'lottie-react';
import SAAS from '../Assets/Animations/Animation - SAAS_img.json';
import CAD from '../Assets/Animations/Animation - CAD.json';
import DATAANALYSIS from '../Assets/Animations/Animation - SAAS DashBoard.json';
import { useNavigate } from 'react-router-dom';
import bg_image1 from '../Assets/Image/blue_strip.png'
import bg_image2 from '../Assets/Image/Angle_ring.png'
// import bg_image31 from '../Assets/Image/multiColor_ring.png';
// import bg_image32 from '../Assets/Image/tech_ring.png';
import bg_shape1 from '../Assets/Image/png_bg_shape1.png';
import bg_shape2 from '../Assets/Image/png-bg-shape2.png';
import bg_shape3 from '../Assets/Image/bg_shape_yellow.png';
import { motion } from 'framer-motion'

const WWD = () => {
    const navigate = useNavigate();
  return (
    <div className='wwd_mainDiv1'>
        <div className='wwd_mainDiv2'>

            <div className='wwd_animation_section1'>

                <div className='wwd_animationGroup1'>
                    <div>
                        <img src={bg_image1} alt='bg_effect1' className='wwd_bg_img1'/>
                    </div>
                    <div className='wwd_animation1'>
                        <Lottie animationData={SAAS} loop={true} />
                    </div>
                </div>

                <div className='motionImgDiv1'>
                    <div className='motionImg1'>
                        <motion.img
                            src={bg_shape1}
                            alt='bg_image'
                            className='insideMotion1'
                            animate={{ rotate: 360 }}
                            transition={{ ease: "linear", duration: 120, repeat: Infinity }}
                        />
                    </div>
                <div className='wwd_content1'>
                        <p className='wwd_textContainerHeading'>SAAS ADOPTION</p>
                        <div className='wwd_detailContainer'>
                            <p className='wwd_textContainerDetails'>
                                Setup SaaS  for your organisation to streamline your process and never worry about scaling. It scales with your organisation! Focus on your core business and let the SaaS handle everything else.
                            </p>
                            <div className='wwd_linkButtonContainer'>
                              <p className='wwd_linkButton1' onClick={()=>navigate('')}>Learn More</p>
                              <p className='wwd_linkButton2' onClick={()=>navigate('')}>Get Started</p>
                            </div>
                        </div>   
                </div>
                </div>

            </div>



            <div className='wwd_animation_section2'>
                
                <div className='motionImgDiv2'>
                    <div className='motionImg2'>
                        <motion.img
                            src={bg_shape2}
                            alt='bg_image'
                            className='insideMotion2'
                            animate={{ rotate: 360 }}
                            transition={{ ease: "linear", duration: 120, repeat: Infinity }}
                        />
                    </div>
                <div className='wwd_content2'>
                        <p className='wwd_textContainerHeading'>CUSTOM APPLICATION BUILDING</p>
                        <div className='wwd_detailContainer'>
                            <p className='wwd_textContainerDetails'>
                            Build a custom bespoke application with us specifically catering to your business needs. Handle your users and data in a way that suits your organisation and increase your technology adoption chances by choosing custom application building path.
                            </p>
                            <div className='wwd_linkButtonContainer'>
                              <p className='wwd_linkButton1' onClick={()=>navigate('')}>Learn More</p>
                              <p className='wwd_linkButton2' onClick={()=>navigate('')}>Get Started</p>
                            </div>
                        </div>   
                </div>
                </div>

                <div className='wwd_animationGroup3'>
                    <div>
                        <img src={bg_image2} alt='bg_effect1' className='wwd_bg_img2'/>
                    </div>
                    <div className='wwd_animation1'>
                        <Lottie animationData={CAD} loop={true} />
                    </div>
                </div>

            </div>



            <div className='wwd_animation_section1'>

                <div className='wwd_animationGroup3'>
                    {/* <div className='wwd_bg_img3_div'>
                        <img src={bg_image31} alt='bg_effect1' className='wwd_bg_img3'/>
                    </div> */}
                    <div className='wwd_animation3'>
                        <Lottie animationData={DATAANALYSIS} loop={true} />
                    </div>
                </div>
                

                <div className='motionImgDiv3'>
                    <div className='motionImg3'>
                                <motion.img 
                                    src={bg_shape3}
                                    alt='bg_image'
                                    className='insideMotion3'
                                    animate={{ rotate: 360 }}
                                    transition={{ ease: "linear", duration: 120, repeat: Infinity }}
                                />
                    </div>
                <div className='wwd_content3'>
                        <p className='wwd_textContainerHeading'>DATA ANALYSIS</p>
                        <div className='wwd_detailContainer'>
                            <p className='wwd_textContainerDetails'>
                                Have your existing data and KPIs analysed to give yourself, your team members and the entire organisation visibility of their data and activity in the most effect visual way resulting in smooth decision making and reverse reflection of contribution of each and every member towards organisational growth.
                            </p>
                            <div className='wwd_linkButtonContainer'>
                              <p className='wwd_linkButton1' onClick={()=>navigate('')}>Learn More</p>
                              <p className='wwd_linkButton2' onClick={()=>navigate('')}>Get Started</p>
                            </div>
                        </div>   
                </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default WWD