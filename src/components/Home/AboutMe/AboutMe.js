import React from 'react';

const AboutMe = () => {
    return (
        <>
            <h3 className='text-3xl font-bold tracking-wider'>Get to know me!</h3>
            <div className='my-8'>
                <div className='text-base text-[#3f3f3f] font-normal leading-relaxed'>
                    <p className='mb-3'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                    <p className='mb-3'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/labonnoakter/" target="_blank" className='text-lg font-semibold underline text-gray-700'>Linkedin</a> where I post useful content related to Web Development and Programming</p>
                    <p className='mb-3'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                </div>
            </div>
            <a href="#contact">
                <button className="bg-[#7843E9] text-base hover:bg-[#9166ec] text-white font-bold py-4 px-10 rounded uppercase tracking-widest mb-16">
                    Contact
                </button>
            </a>
        </>
    );
};

export default AboutMe;