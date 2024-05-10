import React from 'react'
import { services } from '../assets/data/services'
import ServiceCard from '../Components/Services/ServiceCard'

const Services = () => {
  return <section>

    <div className='container'>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-[50px] gap-10 lg:gap-[30px] mt-[0px] lg:mt-[5px]'>
        {services.map((item,index)=>
        <ServiceCard item={item} index={index} key={index} />)}
   </div>


    </div>

  </section>
}

export default Services