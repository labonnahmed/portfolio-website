import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div>
            <h3 className='text-3xl font-bold tracking-wider mx-auto'>My Skills</h3>
            <div className='skill-tools my-8'>
                <ul className='flex flex-wrap gap-4'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>SEO</li>
                    <li>GitHub</li>
                    <li>TailwindCSS</li>
                    <li>Framer Motion</li>
                    <li>Vercel</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;