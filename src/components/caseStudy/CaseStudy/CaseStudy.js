import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../Home/Projects/projectsData.json'
import Navbar from '../../shareComponents/Navbar/Navbar';
import Header from '../Header/Header';
import Overview from '../Overview/Overview';
import Tools from '../Tools/Tools';
import Footer from '../../shareComponents/Footer/Footer';

const CaseStudy = () => {
    const { id } = useParams();

    const project = data.find(p => p.id === id)
    return (
        <div>
            <Navbar />
            <Header project={project} />
            <section className='w-10/12 mx-auto my-20'>
                <img src={require(`../../../images/${project.img}`)} alt={project.title} className='mx-auto' />
            </section>
            <section className='w-8/12 max-md:w-10/12 mx-auto my-20'>
                <Overview />
                <Tools tools={project.Tools} />
                <div className='my-20'>
                    <h3 className='text-3xl max-md:text-xl font-semibold text-gray-900 my-6'>See Live</h3>
                    <Link>
                        <button className="bg-[#7843E9] text-lg hover:bg-[#9166ec] text-white font-bold py-4 px-16 w-40 rounded uppercase tracking-widest my-4 mr-4">
                            Live Link
                        </button>
                    </Link>
                    <Link to='/'>
                        <button className="border-2 border-[#7843E9] text-lg hover:border-[#9166ec] font-bold py-4 px-16 w-40 rounded uppercase tracking-widest">
                            Go Back
                        </button>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default CaseStudy;