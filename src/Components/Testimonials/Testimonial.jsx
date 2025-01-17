
import React from 'react';
// import { Pagination } from 'swiper/css/pagination' 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png';
import {HiStar} from 'react-icons/hi'


const Testimonial = () => {
  return (
    <div className='mt-8 lg:mt-14'>
      <Swiper
        
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <div className='py-6 px-5 rounded-lg bg-white'>
            <div className='flex items-center gap-4'>
              <img src={patientAvatar} alt='Patient Avatar' className='w-12 h-12 rounded-full' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Jikku Vijay</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    
                </div>
              </div>
            </div>

            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
              "I have taken medical services from them.It was such a good experience with them."
            </p>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-6 px-5 rounded-lg bg-white'>
            <div className='flex items-center gap-4'>
              <img src={patientAvatar} alt='Patient Avatar' className='w-12 h-12 rounded-full' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Jikku Vijay</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    
                </div>
              </div>
            </div>

            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
              "I have taken medical services from them.It was such a good experience with them."
            </p>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-6 px-5 rounded-lg bg-white'>
            <div className='flex items-center gap-4'>
              <img src={patientAvatar} alt='Patient Avatar' className='w-12 h-12 rounded-full' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Jikku Vijay</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    
                </div>
              </div>
            </div>

            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
              "I have taken medical services from them.It was such a good experience with them."
            </p>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-6 px-5 rounded-lg bg-white'>
            <div className='flex items-center gap-4'>
              <img src={patientAvatar} alt='Patient Avatar' className='w-12 h-12 rounded-full' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Jikku Vijay</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    
                </div>
              </div>
            </div>

            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
              "I have taken medical services from them.It was such a good experience with them."
            </p>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-6 px-5 rounded-lg bg-white'>
            <div className='flex items-center gap-4'>
              <img src={patientAvatar} alt='Patient Avatar' className='w-12 h-12 rounded-full' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Jikku Vijay</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    
                </div>
              </div>
            </div>

            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
              "I have taken medical services from them.It was such a good experience with them."
            </p>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-6 px-5 rounded-lg bg-white'>
            <div className='flex items-center gap-4'>
              <img src={patientAvatar} alt='Patient Avatar' className='w-12 h-12 rounded-full' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Jikku Vijay</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    <HiStar className='text-yellowColor w-[18px] h-5 '/>
                    
                </div>
              </div>
            </div>

            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
              "I have taken medical services from them.It was such a good experience with them."
            </p>

          </div>
        </SwiperSlide>         
      </Swiper>
    </div> 
  );
};

export default Testimonial;
