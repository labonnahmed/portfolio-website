import React from 'react';
import Media from '../Media/Media';

const HeaderMain = () => {
    return (
        <div className='headerContainer text-center'>
            <div className='header-content'>
                <h1 className='uppercase headerIntro tracking-wider lg:text-7xl text-5xl'>Hey, I'm <span className='max-md:block leading-relaxed'>Labonno Akter</span></h1>
                <div className='header-info md:w-10/12 lg:w-8/12 w-11/12'>
                    <p className='lg:text-2xl md:text-xl max-md:text-lg text-[#3a3a3a] font-normal'>
                        <span className='leading-relaxed'>
                            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                        </span>
                    </p>
                </div>
                <a href="https://ivory-cordey-51.tiiny.site" attributes-list download>
                    <button className="bg-[#7843E9] text-lg hover:bg-[#9166ec] text-white font-bold py-4 px-6 rounded uppercase tracking-widest mt-10">
                        Download resume
                    </button>
                </a>
            </div>
            <Media />
        </div>
    );
};

export default HeaderMain;