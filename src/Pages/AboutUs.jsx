import React from 'react';
import '../Styles/AboutUs.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BannerImage1 from '../Assets/Image/TRU_ACT_IMG_1.jpeg';
import BannerImage2 from '../Assets/Image/TRU_ACT_IMG_2.jpeg';
import BannerImage3 from '../Assets/Image/TRU_ACT_IMG_3.jpeg';
import BannerImage4 from '../Assets/Image/TRU_ACT_IMG_4.jpeg';

const AboutUs = () => {
  return (
    <div className='aboutUs_mainDiv'>
      <Navbar />
      {/* Section 01 */}
      <section style={{backgroundColor:'#3f3f3f'}}>

        <div className="section_1_maindiv">
            <header className="section_1_header">
                Driving Innvation in <span style={{color:'#fccd0d'}}>Technology Adoption</span>
                <p className="sectio_header_p">        
                  Technology adoption refers to the process by which individuals, businesses, or societies take on and integrate new technological innovations into their daily 
                  practices and operations. It involves the acceptance, understanding, and utilization of technological advancements to achieve specific goals or improve existing 
                  processes.
                </p>
            </header>
            
            <div className="section_01_img">
                <div><img src={BannerImage1} alt='' /></div>
                <div><img src={BannerImage2} alt='' /></div>
                <div><img src={BannerImage3} alt='' /></div>
            </div>
        </div>

      </section>

      {/*Section 02*/}
      <section style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

            <div className="section_2_mainDiv">

                <div className="section_2_FoundingStoryDiv1">

                    <div className="section_2_FoundingStoryDiv2">
                        <h1 className="section_2_h1 ">
                            Our Founding Story
                        </h1>
                        <p className="section_2_p1">
                            Something....
                        </p>
                        <p className="section_2_p1">
                            Something....
                        </p>
                    </div>
                    <div>
                        <img src={BannerImage4} alt='' className="section_2_img" />
                    </div>

                </div>


                <div className="section_2_OurVision1">

                    <div className="section_2_OurVision2">
                        <h1 className="section_2_OurVision2_h1">
                            Our Vision
                        </h1>
                        <p className="section_2_OurVision2_p1">
                          Enable Technology and Marketing SaaS
                          journeys through strategic consulting and
                          implementation of products/services that
                          are in line with the best of Technology and
                          Marketing trends.
                        </p>
                    </div>

                    <div className="section_2_ourMission">
                        <h1 className="section_2_ourMission_h1">
                            Our Mission
                        </h1>
                        <p className="section_2_ourMission_p1 ">
                          To offer sustainability to our employees
                          to yield the best, to our clients to reap the
                          best and make positive contributions to
                          the society where we operate.
                        </p>
                    </div>

                </div>

            </div>

      </section>

      <Footer />
    </div>
  )
}

export default AboutUs