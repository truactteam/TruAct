import React from 'react'
import video from '../Assets/Videos/bg_clip_2.mp4';
import { FaCircleArrowRight } from "react-icons/fa6";
import './HeroSection.css';
import { motion } from "framer-motion";
import { IoIosStar } from "react-icons/io";
import { useParallax } from 'react-scroll-parallax';


const HeroSection = () => {
  const text = "Enable Technology and Marketing SaaS journeys through strategic consulting and implementation of products/services that are in line with the best of Technology and Marketing trends.".split(" ")
  const { ref } = useParallax({speed: -200})
  return (
    <div className='MainDiv' ref={ref}>
        <div className='heroSection'>
            <div className='heroSectionContent'>
              <div className='companyName'>
                <p className='name p1' style={{color:'#999798'}}><span className='rotate1 Fredoka'>T</span><span className='rotate2 Fredoka'>R</span></p>
                <p className='name p2' style={{color:'#fccd0d'}}><span className='rotate1 kdam-thmor U'>U</span></p>
                <p className='name p3' style={{color:'#999798'}}><span className='rotate2 Fredoka'>A</span><span className='rotate1 Fredoka'>C</span><span className='rotate2 Fredoka'>T</span></p>
              </div>
              {/* <div className='companyLine lineUp' style={{display:'flex', flexDirection:'column'}}><div>Welcome to your</div> <div>premium lounge</div></div> */}
              <div className='companyLine lineUp' style={{display:'flex', flexDirection:'column'}}>
                <div className='gradient-text marginPadding'>WELCOME TO YOUR</div>
                <div className='marginPadding' style={{display:'flex'}}>
                  <span style={{display:'flex', flexDirection:'column', position:'relative'}}>
                    <span>PREMIUM</span>
                    <span className='star'>
                      <IoIosStar className='starMargin' />
                      <IoIosStar className='starMargin' />
                      <IoIosStar className='starMargin' />
                      <IoIosStar className='starMargin' />
                      <IoIosStar className='starMargin' />
                      <IoIosStar className='starMargin' />
                      <IoIosStar className='starMargin' />
                    </span>
                  </span>&nbsp;<span className='gradient-text'>LOUNGE</span>
                </div>
              </div>

              <div>
                <p className='paragraph'>
                  {
                    text.map((el, i) => (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.25,
                          delay: i / 10,
                        }}
                        key={i}
                      >
                        {el}{" "}
                      </motion.span>
                    ))
                  }
                </p>
              </div>
              <div className='heroSectionButton'>
                  <p className='link-button p1'>Let's Begin the Journey with Us &nbsp;<FaCircleArrowRight className='arrowLogo'/></p>
              </div>
            </div>
            <div className='videoDiv'>
                <video autoPlay loop  muted className='videoPlay'>
                    <source src={video} type='video/mp4'/>
                </video>
            </div>
        </div>
    </div>
  )
}

export default HeroSection