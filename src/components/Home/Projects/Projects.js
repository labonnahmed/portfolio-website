import React from 'react';
import ProjectsDetails from '../ProjectsDetails/ProjectsDetails';
import data from './projectsData.json'

const Projects = () => {
    return (
        <div id='projects' className='w-full pt-20 mx-auto'>
            <div className='w-11/12 mx-auto'>
                <div className='text-center'>
                    <h2 className='uppercase font-bold text-4xl tracking-widest text-gray-900'>Projects</h2>
                    <div className='h-1.5 w-10 rounded-lg mt-6 bg-primary mx-auto'></div>
                    <p className='md:text-lg md:w-9/12 mx-auto leading-relaxed my-6 font-medium text-gray-600'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
                </div>
                <div className='my-24 mx-auto'>
                    {
                        data.map(p => <ProjectsDetails data={p} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;