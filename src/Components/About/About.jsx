import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return <section>

    <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

            {/* About Img */}
            
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt=''></img>
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        <img src={aboutCardImg}></img>
                    </div>
            </div>


            {/* about content */}

            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be one of the nations best</h2>
                <p className='text_para mt-[25px]'>For the past 30 years in a row, U S news & World report has organized us as the one of the best public platform in medical section.With its innovative features and user-friendly interface, Medicare has revolutionized healthcare administration, streamlining processes for hospitals, clinics, and healthcare professionals nationwide. </p>
                <p className='text_para mt-[20px]'>As the top app in its category, Medicare continues to set the standard for excellence, empowering healthcare providers to deliver optimal care while optimizing operational workflows. Its widespread adoption speaks volumes about its reliability and effectiveness, making Medicare an indispensable tool for modern healthcare management.</p>
                <Link to='/'> <button className='btn'>Learn More</button></Link>
            </div>


        </div>
    </div>

  </section>
}

export default About