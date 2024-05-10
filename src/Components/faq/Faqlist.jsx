import React from 'react'
import {faqs} from './../../assets/data/faqs'
import FaqItems from './FaqItems'


const Faqlist = () => {
  return (
    <ul className='mt-[38px] '>
        {faqs.map((item,index)=> <FaqItems item={item} key={index}/>)}
    </ul>
  )
}

export default Faqlist