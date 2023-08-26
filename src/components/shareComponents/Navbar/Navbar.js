import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../images/logo.png';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);


    return (
        <div className='bg-white w-full fixed top-0 z-50 shadow-lg own-nav'>
            <div className='md:w-11/12 mx-auto md:flex uppercase text-gray-700 md:p-4 max-md:p-2 max-w-screen-xl flex flex-wrap items-center justify-between max-md:mx-5'>
                <a className='' href="/">
                    <div className='flex font-bold text-lg max-md:text-base tracking-wide'>
                        <img src={logo} alt="" className='rounded-full h-14 w-14' />
                        <div className='my-3 px-3 hover:text-primary'>
                            <span> Labonno Akter </span>
                        </div>
                    </div>
                </a>
                <button onClick={() => setOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center md:hidden rounded p-2 ml-3 text-sm text-gray-500 dots" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-8 h-8 text-gray-800" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={`w-full nav-menu ml-auto font-bold my-auto z-10 md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
                    <ul className='md:flex menu-items md:space-x-1 max-md:py-3'>
                        <a href="/" onClick={() => setOpen(false)}>
                            <li>Home</li>
                        </a>
                        <a href="#about" onClick={() => setOpen(false)}>
                            <li>About</li>
                        </a>
                        <a href="#projects" onClick={() => setOpen(false)}>
                            <li>Projets</li>
                        </a>
                        <a href="#contact" onClick={() => setOpen(false)}>
                            <li>Contact</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;