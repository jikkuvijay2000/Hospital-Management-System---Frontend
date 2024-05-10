import React from 'react'

const Contact = () => {
  return <section>
    <div className='px-4 mx-auto max-w-screen-md'>
      <h2 className='heading text-center '>Contact Us</h2>
        <p className='mb-8 mt- lg:mb-16 font-light text-center text_para'>
          Got a technical issue? Want ot send a feedback about our beta updates? We are happy to hear!
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label htmlFor='email' className='form_label'>
                Your Email
            </label>

            <input
             type='email' 
             id='email' 
             placeholder='example@gmail.com' 
             className='form_input mt-1'>
            </input>
          </div>

          <div>
            <label htmlFor='subject' className='form_label'>
               Subject
            </label>

            <input
             type='text' 
             id='subject' 
             placeholder='Let us know how we can help you!' 
             className='form_input mt-1'>
            </input>


         
          </div>

          <div className='sm:col-span-2'>
            <label htmlFor='message' className='form_label'>
                Your Message
            </label>

            <textarea
             type='text' 
             id='message' 
             placeholder='Leave us a message..' 
             className='form_input mt-1'>
            </textarea>
          </div>
          <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
        </form>
    </div>
  </section>
}

export default Contact