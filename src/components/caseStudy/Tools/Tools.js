import React from 'react';

const Tools = ({ tools }) => {
    return (
        <div className='my-20'>
            <h3 className='text-3xl max-md:text-xl font-semibold text-gray-900 my-8'>Tools Used</h3>
            <div className='skill-tools my-8'>
                <ul className='text-lg text-gray-500 font-normal flex flex-wrap gap-4'>
                    {
                        tools.map(tool => <li>{tool}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Tools;