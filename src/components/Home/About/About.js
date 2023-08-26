import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';

const About = () => {
    return (
        <div id='about' className='w-full pt-32 pb-2 mx-auto bg-slate-50'>
            <div className='w-10/12 mx-auto'>
                <div className='text-center'>
                    <h2 className='uppercase font-bold text-4xl tracking-widest text-gray-900'>About Me</h2>
                    <div className='h-1.5 w-10 rounded-lg mt-6 bg-primary mx-auto'></div>
                    <p className='md:text-lg md:w-9/12 mx-auto leading-relaxed my-6 font-medium text-gray-600'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                </div>
                <div className='lg:grid grid-cols-12 mt-24 mb-10 gap-10 mx-auto'>
                    <div className='col-span-7 md:pr-28'>
                        <AboutMe />
                    </div>
                    <div className='col-span-5'>
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;