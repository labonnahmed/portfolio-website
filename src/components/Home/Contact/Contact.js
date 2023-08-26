import React from 'react';
import './Contact.css'
import ContactFrom from '../ContactForm/ContactFrom';

const Contact = () => {
    return (
        <div id='contact' className='contact-container w-full pt-32 pb-20 mx-auto bg-slate-50'>
            <div className='w-10/12 mx-auto'>
                <div className='text-center'>
                    <h2 className='uppercase font-bold text-4xl tracking-widest text-gray-900'>CONTACT</h2>
                    <div className='h-1.5 w-10 rounded-lg mt-6 bg-primary mx-auto'></div>
                    <p className='md:text-xl md:w-9/12 mx-auto leading-relaxed my-6 font-medium text-gray-700'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                </div>
                <div className='mt-24 mb-10 mx-auto lg:w-9/12 md:w-11/12 shadow-xl shadow-gray-300'>
                    <ContactFrom />
                </div>
            </div>
        </div>
    );
};

export default Contact;