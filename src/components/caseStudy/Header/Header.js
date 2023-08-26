import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ project }) => {

    console.log(project.link)
    return (
        <section className='headerContainer text-center'>
            <div className='header-content'>
                <h1 className='uppercase headerIntro tracking-wider lg:text-7xl text-5xl'>{project.title}</h1>
                <div className='header-info md:w-10/12 lg:w-8/12 w-11/12'>
                    <p className='lg:text-xl md:text-lg max-md:text-md text-[#3a3a3a] font-normal'>
                        <span className='leading-relaxed'>
                            This page contains the case study of <span className='font-bold text-gray-600'>{project.title}</span> Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.
                        </span>
                    </p>
                </div>
                <Link to={project.link} target='blank'>
                    <button className="bg-[#7843E9] text-lg hover:bg-[#9166ec] text-white font-bold py-4 px-16 rounded uppercase tracking-widest mt-10">
                        Project Link
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Header;