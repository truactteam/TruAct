import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import '../Styles/Slider.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import {data} from '../Assets/Data/data';
// import { FaCalendarAlt } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
// import ReactStars from 'react-rating-stars-component'
import { PiShootingStarFill } from "react-icons/pi";
import { RiUserStarFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";

const Slider = () => {
    // const truncateWords = 40;
    // const data2 = [
    //     {
    //         "company":"Pest Cure Incorporation",
    //         "Date":"26 Dec",
            // "comment":"Its been almost half a decade we are associated with Truact & Mr. Kuuljeet Abroll was skeptical about Zoho at that time, as I did not have a very good experience with other IT partners / platforms.... But the conviction Mr. Abroll had and the confidence he built made me sure that I am selecting the right platform.It's been soo long and Zoho is part of our system that we cannot think our work without Zoho._Mr. Kuuljeet and Mr. Harnoor have been much supportive in suggesting new tools and how to take maximum benefits from the platform, by using different options / reports and tools._We have been using CRM, Books & Creator for now & looking forward to learn and use more tools, to grow along._Best part with Mr. Kuuljeet Abroll his team is that he is not limited to selling part of the platform, he will make sure that you learn to use all tools and take best use of the platform. Also, his support in creating customize applications in creator is another level of experience._I and my whole team, has no hesitation in recommending Truact / Kuljeet Abroll to anyone and everyone, for all their CRM and related needs."
    //     }
    // ];
  return (
    <div>
        <Swiper
          breakpoints={{
            300:{
                slidesPerView: 1,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 30
                },
            1024: {
                slidesPerView: 2,
                spaceBetween: 40
                },
            1280: {
                slidesPerView: 4,
                spaceBetween: 50
                }
          }}
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          freeModeMomentum={false}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={10000}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-[1250px]"
        >
          {data.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                    <div className='SliderBlock'>
                        <div className='gradient2'></div>
                        <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                          <div style={{fontSize:'2.6rem', padding:'2px', fontWeight:'700'}}><MdPeople /></div>
                          <div className='reviewCompany' style={{fontSize:'1.3rem', fontWeight:'500'}}>{review.company}</div>
                        </div>
                        {/* <div className='pacifico-regular' style={{fontSize:'1.5rem', color:'#e07155', marginTop:'10px'}}><FaCalendarAlt /> {review.Date}</div> */}
                        {/* <div>
                          <ReactStars
                            count={review.rating}
                            value={review.rating}
                            size={24}
                            edit={false}
                            activeColor="#fccd0d"
                            emptyIcon={<MdOutlineStars />}
                            fullIcon={<MdOutlineStars />}
                          />
                        </div> */}
                        <div style={{display:'flex', marginTop:'20px'}}>
                          {
                            review.rating.map((value,index)=>(
                              <div style={{margin:'4px',boxShadow:''}}><FaStar fontSize={'24px'} color='#fccd0d'/></div>
                            ))
                          }
                        </div>
                        <div className='reviewComment'>
                          {/* <div className='truncateComment'>
                            {
                              review.comment.split(" ").length > truncateWords?
                              `${review?.comment
                                  .split(" ")
                                  .slice(0, truncateWords)
                                  .join(" ")} ...`
                              :
                              `${review?.comment}`
                            }
                          </div> */}
                          <div className='truncateComment'>Review</div>
                          <div className='fullComment containerSlider'>
                            {
                                review.comment.split("_").map((Value,j)=>{
                                    return(
                                        <div key={j} className='commentValue' style={{margin:'10px', objectFit:'cover'}}>{Value}</div>
                                    )
                                })
                            }
                          </div>
                        </div>
                    </div>
              </SwiperSlide>
            )
          })}
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        </Swiper>
    </div>
  )
}

export default Slider