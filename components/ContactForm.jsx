"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_skitfft', 'template_fbzimue', form.current, {
                publicKey: 'N1ihYRa98sVZqsLig',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
<div>
    <h2 className='text-black text-left md:ml-[100px]  text-[50px] mb-4'>Contact Us</h2>
<div class="flex items-center justify-center p-12 ">

<div class="mx-auto w-full max-w-[550px] mt-[50px]">
  <form ref={form} onSubmit={sendEmail}
 >
    <div class="mb-5">
      <label
        for="name"
        class="mb-3 block text-base font-medium text-[#07074D]"
      >
        Name
      </label>
      <input
        type="text"
        name="user_name"
        id="name"
        placeholder=" Name"
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600  focus:shadow-md"
      />
    </div>
    <div class="mb-5">
      <label
        for="email"
        class="mb-3 block text-base font-medium text-[#07074D]"
      >
        Email Address
      </label>
      <input
        type="email"
        name="user_email"
        id="email"
        placeholder="example@domain.com"
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
      />
    </div>
 
    <div class="mb-5">
      <label
        for="message"
        class="mb-3 block text-base font-medium text-[#07074D]"
      >
        Message
      </label>
      <textarea
        rows="4"
        name="message"
        id="message"
        placeholder="Type your message"
        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#313777] focus:shadow-md"
      ></textarea>
    </div>
    <div>

    <input type="submit" value="Send"  class="hover:shadow-form rounded-md bg-blue-700 py-3 px-8 text-base font-semibold text-white outline-none"
      />
    
    </div>
  </form>
</div>
</div>
</div>
    );
};

export default ContactForm;
