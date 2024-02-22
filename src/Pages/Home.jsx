import React from 'react';
// import Spline from '@splinetool/react-spline';
import Slider from '../Components/Slider';
import '../Styles/Home.css'
import Navbar from '../Components/Navbar';
import '../Styles/Spinner.css';
import DATAANALYSIS from '../Assets/Animations/Animation - SAAS DashBoard.json';
import CAD from '../Assets/Animations/Animation - CAD.json';
import SAAS from '../Assets/Animations/Animation - SAAS_img.json';
import Animation from '../Components/Animation';
import { BsDatabaseFillDown } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { FaThumbsUp, FaInfinity, FaMapMarkedAlt  } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa6";
import { SiZoho } from "react-icons/si";
import { GiTreeGrowth } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';
import { motion } from "framer-motion";
import WWD from '../Components/WWD';
import bg_fill1 from '../Assets/Image/tech_bg_fill1.png';
import bg_fill2 from '../Assets/Image/tech_ring.png';
import bg_fill3 from '../Assets/Image/tech_bg_fill2.png';



const Home = () => {
    // const [loading,setLoading] = useState(true);
    // const handleLoading = ()=>{
    //     setLoading(false);
    // }
    const card1 = {
        visible: {
            opacity: 1,
            x: '0px',
        },
        hidden:{
            opacity: 0,
            x: '-100px'
        }
    }
    const card2 = {
        visible: {
            opacity: 1,
            x: '0px',
        },
        hidden:{
            opacity: 0,
            x: '100px'
        }
    }
    const card3 = {
        visible: {
            opacity: 1,
            x: '0px',
        },
        hidden:{
            opacity: 0,
            x: '-100px'
        }
    }
    const card4 = {
        visible: {
            opacity: 1,
            x: '0px',
        },
        hidden:{
            opacity: 0,
            x: '500px'
        }
    }
    const card5 = {
        visible: {
            opacity: 1,
            x: '0px',
        },
        hidden:{
            opacity: 0,
            x: '350px'
        }
    }
  return (
    <div style={{backgroundColor:'white', color:'white', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', zIndex:'15'}}>
        <Navbar />
        <HeroSection />
        {/* {
            loading && <div style={{height:'100vh', width:'80vw', display:'flex', justifyContent:'center', alignContent:'center', marginTop:'50vh'}}><div className='custom-loader'></div></div>
        } */}
        {/* <div>
            <div style={{margin:"0px", padding:"0px", position:'relative', boxShadow:'20px 0px 50px #727272'}}>

                <div style={{height:'99vh', width:'99.8vw'}}>
                    <Spline scene="https://prod.spline.design/LbloYbvKoct7s6hS/scene.splinecode" onLoad={handleLoading}/>
                </div>
                
            </div>
        </div> */}
        <div style={{
            zIndex:'2',
            width:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'black',
            overflowX:'auto',
            overflowY:'auto'
            // borderTopLeftRadius:'8%',
            // borderTopRightRadius:'8%'
            }}>
        {/* What we Do Section */}
        <div id='WWD' style={{
            width:'100%',
            paddingTop:'5rem',
            backgroundColor:'black',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            zIndex:'2',
            overflowX:'hidden',
            overflowY:'hidden'
            // borderTopLeftRadius:'8%',
            // borderTopRightRadius:'8%'
            }}
        >
                <div className='Section2_head open-sans'>
                    {/* <p className='bg_fill1'><img src={bg_fill1} alt=''/></p> */}
                    {/* <p className='bg_fill2'><img src={bg_fill2} alt=''/></p> */}
                    <p className='bg_fill3'><img src={bg_fill3} alt='' style={{height:'30vh'}}/></p>
                    WHAT WE DO
                </div>
                {/* <div className='animation'>
                    <Animation
                        animationData={SAAS}
                        heading={"SAAS ADOPTION"}
                        Something1={"Setup SaaS  for your organisation to streamline your process and never worry about scaling. It scales with your organisation! Focus on your core business and let the SaaS handle everything else. "}
                        Link1={""}
                        Link2={""}
                    />
                </div>
                <div className='animation'>
                    <Animation
                        animationData={CAD}
                        heading={"CUSTOM APPLICATION BUILDING"}
                        Something1={"Build a custom bespoke application with us specifically catering to your business needs. Handle your users and data in a way that suits your organisation and increase your technology adoption chances by choosing custom application building path."}
                        Link1={""}
                        Link2={""}
                        reverse={"row-reverse"}
                    />
                </div>
                <div className='animation'>
                    <Animation
                        animationData={DATAANALYSIS}
                        heading={"DATA ANALYSIS"}
                        Something1={"Have your existing data and KPIs analysed to give yourself, your team members and the entire organisation visibility of their data and activity in the most effect visual way resulting in smooth decision making and reverse reflection of contribution of each and every member towards organisational growth."}
                        Link1={""}
                        Link2={""}
                    />
                </div> */}
                <WWD />
        </div>
            
        {/* Slider */}
        <div style={{width:'95%', marginTop:'3rem', backgroundColor:'black'}}>
            <div className='customerHeading open-sans'>
                        {/* <div className='gradient'></div> */}
                        <div className='customerHeadingText'>Our Customers</div>
                    </div>

                    <div style={{height:'40vh'}}>
                        <Slider />
            </div>
        </div>
        
        {/* <div style={{marginTop:'2rem',width:'80vw'}}>
            <div style={{fontSize:'2rem', color:'wheat', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>SECTION 3</div>
            <div><Spline scene="https://prod.spline.design/eu-sLhwBF4p6fidI/scene.splinecode" /></div>
        </div> */}

        
        <div className='TilesHeading'>Engagement Benefits</div>
        <motion.div
            className='tilesContainer'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
                type: 'spring',
                duration: 3,
                ease: "easeIn",
                delay: 0.5,
                }}
            >

            <div className='tiles1'>
                <div className='tiles1Item'>
                    <div className='tileIcon'><BsBarChartFill /></div>
                    <div className='tileDetails'>Improved Efficiency and Effectiveness</div>
                </div>
                <div className='tiles1Item'>
                    <div className='tileIcon'><GiTreeGrowth /></div>
                    <div className='tileDetails'>Sustainable Environmental Operations</div>
                </div>
                <div className='tiles1Item'>
                    <div className='tileIcon'><MdEngineering /></div>
                    <div className='tileDetails'>Better, Timely, Proactive Decision Making</div>
                </div>
            </div>

            <div className='tiles2'>
                <div className='tiles2Item'>
                    <div className='tileIcon'><BsDatabaseFillDown /></div>
                    <div className='tileDetails'>Reduce Cost Increase Revenue</div>
                </div>
                <div className='tiles2Item'>
                    <div className='tileIcon'><FaThumbsUp /></div>
                    <div className='tileDetails'>Employee Satisfaction</div>
                </div>
                {/* <div className='tiles1Item'>
                    <div className='tileIcon'></div>
                    <div className='tileDetails'></div>
                </div> */}
            </div>
        </motion.div>

        <div className='overViewHeading'>ABROLL CONSULTING AND TECHNOLOGY LLP</div>
        <div className='overViewTiles'>

            <motion.div
                className='overViewTile1 box-borderOverview marginB'
                whileInView={card1.visible}
                initial={card1.hidden}
                transition={{
                    type: 'tween',
                    duration: 1,
                    bounce: 0.4
                }}
            >
                    <div><FaIndustry className='OverViewtileIcon'/></div>
                    <div className='overViewTilesDetails'>
                        <p className='overViewDetailHeading'>15+</p>
                        <p className='detailDetail'>Industries</p>
                    </div>
            </motion.div>

            <motion.div
                className='overViewTile1 marginT'
                whileInView={card2.visible}
                initial={card2.hidden}
                transition={{
                    type: 'tween',
                    duration: 2,
                    bounce: 0.4
                }}
            >
                    <div><RiCustomerService2Line className='OverViewtileIcon'/></div>
                    <div className='overViewTilesDetails'>
                        <p className='overViewDetailHeading'>100+</p>
                        <p className='detailDetail'>Custom</p>
                        <p className='detailDetail'>Solutions</p>
                    </div>
            </motion.div>

            <motion.div
                className='overViewTile1 box-borderOverview  marginB'
                whileInView={card3.visible}
                initial={card3.hidden}
                transition={{
                    type: 'tween',
                    duration: 2,
                    bounce: 0.4,
                    delay: 1,
                }}
            >
                <div><SiZoho className='zoho'/></div>
                <div className='overViewTilesDetails'>
                    <p className='overViewDetailHeading'>20+</p>
                    <p className='detailDetail'>ZOHO</p>
                    <p className='detailDetail'>product</p>
                    <p className='detailDetail'>experience</p>
                </div>
            </motion.div>

            <motion.div
                className='overViewTile1 marginT'
                whileInView={card4.visible}
                initial={card4.hidden}
                transition={{
                    type: 'tween',
                    duration: 2,
                    bounce: 0.4,
                    delay: 1,
                }}
            >
                <div><FaMapMarkedAlt  className='OverViewtileIcon'/></div>
                <div className='overViewTilesDetails'>
                    <p className='overViewDetailHeading'>50+</p>
                    <p className='detailDetail'>Pan India</p>
                    <p className='detailDetail'>Solution</p>
                </div>
            </motion.div>

            <motion.div
                className='overViewTile1 box-borderOverview marginB'
                whileInView={card5.visible}
                initial={card5.hidden}
                transition={{
                    type: 'tween',
                    duration: 2,
                    bounce: 0.4,
                    delay: 1,
                }}
            >
                <div><FaInfinity  className='OverViewtileIcon'/></div>
                <div className='overViewTilesDetails'>
                    <p className='detailDetail'>Trust</p>
                    <p className='detailDetail'>Reliability</p>
                    <p className='detailDetail'>Dedication</p>
                    <p className='detailDetail'>Uniqueness</p>
                </div>
            </motion.div>

        </div>
        </div>
         <Footer />       
    </div>
  )
}

export default Home