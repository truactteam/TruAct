import React from 'react';
import '../Styles/WWD.css'
import Lottie from 'lottie-react';
import SAAS from '../Assets/Animations/SAAS_ANI_2.json';
import CAD from '../Assets/Animations/CAD_ANI_again2.json';
import DATAANALYSIS from '../Assets/Animations/Animation - SAAS DashBoard.json';
import API from '../Assets/Animations/API_ANI_03.json';
import { useNavigate } from 'react-router-dom';
// import bg_image1 from '../Assets/Image/blue_strip.png'
// import bg_image2 from '../Assets/Image/Angle_ring.png'
// import bg_image31 from '../Assets/Image/multiColor_ring.png';
// import bg_image32 from '../Assets/Image/tech_ring.png';
import bg_shape1 from '../Assets/Image/png_bg_shape1.png';
import bg_shape2 from '../Assets/Image/png-bg-shape2.png';
import bg_shape3 from '../Assets/Image/bg_shape_yellow.png';
import { motion } from 'framer-motion'
import HoverShinyEffect from './HoverShinyEffect';

const WWD = () => {
    const navigate = useNavigate();


    const card1 = {
        visible: {
            opacity: 1,
            y: '0px',
        },
        hidden:{
            opacity: 0,
            y: '10rem',
        }
    }
    const card2 = {
        visible: {
            opacity: 1,
            y: '0px',
        },
        hidden:{
            opacity: 0,
            y: '10rem'
        }
    }




  return (
    <div className='wwd_mainDiv1'>
        <div className='wwd_mainDiv2'>

            <motion.div
                initial={card2.hidden}
                whileInView={card2.visible}
                exit={{opacity: 0}}
                transition={{
                    type: 'spring',
                    duration: 3,
                    ease: "easeIn",
                    delay: 0.1,
                }}
                viewport={{once: true}}
                className='wwd_animation_section2'>
                
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
                            <HoverShinyEffect color={"yellow"}/>
                    </div>
                </div>

                <div className='wwd_animationGroup3'>
                    {/* <div className='not-required'>
                        <img src={bg_image2} alt='bg_effect1' className='wwd_bg_img2'/>
                    </div> */}
                    <div className='wwd_animation2'>
                        <Lottie animationData={CAD} loop={true} />
                    </div>
                </div>

            </motion.div>


            <motion.div
                initial={card1.hidden}
                whileInView={card1.visible}
                exit={{opacity: 0}}
                transition={{
                    type: 'spring',
                    duration: 3,
                    ease: "easeIn",
                    delay: 0.1,
                }}
                viewport={{once: true}}
                className='wwd_animation_section1'>

                <div className='wwd_animationGroup1'>
                    {/* <div className='not-required'>
                        <img src={bg_image1} alt='bg_effect1' className='wwd_bg_img1'/>
                    </div> */}
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
                            <HoverShinyEffect color={"blue"}/>
                    </div>
                </div>

            </motion.div>
            



            <motion.div
                initial={card2.hidden}
                whileInView={card2.visible}
                exit={{opacity: 0}}
                transition={{
                    type: 'spring',
                    duration: 3,
                    ease: "easeIn",
                    delay: 0.1,
                }}
                viewport={{once: true}}
                className='wwd_animation_section3'
            >

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
                            <HoverShinyEffect color={"purple"}/>   
                    </div>
                </div>

                <div className='wwd_animationGroup3'>
                    {/* <div className='wwd_bg_img3_div'>
                        <img src={bg_image31} alt='bg_effect1' className='wwd_bg_img3'/>
                    </div> */}
                    <div className='wwd_animation3'>
                        <Lottie animationData={DATAANALYSIS} loop={true} />
                    </div>
                </div>

            </motion.div>


            <motion.div
                initial={card1.hidden}
                whileInView={card1.visible}
                exit={{opacity: 0}}
                transition={{
                    type: 'spring',
                    duration: 3,
                    ease: "easeIn",
                    delay: 0.1,
                }}
                viewport={{once: true}}
                className='wwd_animation_section4'
            >
                
                <div className='wwd_animationGroup4'>
                    {/* <div className='not-required'>
                        <img src={bg_image2} alt='bg_effect1' className='wwd_bg_img2'/>
                    </div> */}
                    <div className='wwd_animation4'>
                        <Lottie animationData={API} loop={true} />
                    </div>
                </div>

                <div className='motionImgDiv4'>
                    <div className='motionImg4'>
                        <motion.img
                            src={bg_shape2}
                            alt='bg_image'
                            className='insideMotion4'
                            animate={{ rotate: 360 }}
                            transition={{ ease: "linear", duration: 120, repeat: Infinity }}
                        />
                    </div>
                    <div className='wwd_content4'>
                            <p className='wwd_textContainerHeading'>API Integrations</p>
                            <div className='wwd_detailContainer'>
                                <p className='wwd_textContainerDetails'>
                                    Seamlessly get different software, being used in your organisation integrated to increase productivity, automate jobs and reduce work loads.
                                </p>
                                <div className='wwd_linkButtonContainer'>
                                <p className='wwd_linkButton1' onClick={()=>navigate('')}>Learn More</p>
                                <p className='wwd_linkButton2' onClick={()=>navigate('')}>Get Started</p>
                                </div>
                            </div>
                            <HoverShinyEffect color={"green"}/>   
                    </div>
                </div>

            </motion.div>

        </div>
    </div>
  )
}

export default WWD