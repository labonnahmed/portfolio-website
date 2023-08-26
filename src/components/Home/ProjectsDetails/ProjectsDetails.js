import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsDetails = ({ data }) => {
    return (
        <div className='lg:grid grid-cols-8 my-12'>
            <div className='col-span-5'>
                <img src={require(`../../../images/${data.img}`)} alt="project" className='' />
            </div>
            <div className='col-span-3 my-auto ml-10'>
                <h3 className='text-3xl font-bold tracking-wider my-8 md:mx-auto'>{data.title}</h3>
                <p className='mb-3 text-base text-[#646464] leading-loose md:mx-auto'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                <Link to={`/caseStudy/${data.id}`} target='blank'>
                    <button className="bg-[#7843E9] text-base hover:bg-[#9166ec] text-white font-bold py-4 px-10 rounded uppercase tracking-widest my-8">
                        Case study
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectsDetails;