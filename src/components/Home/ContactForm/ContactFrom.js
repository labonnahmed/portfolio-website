import React from 'react';

const ContactFrom = () => {
    return (
        <form className='bg-gray-50 py-10 rounded-md max-md:pr-4'>
            <div class="mb-8 w-10/12 mx-auto">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Name</label>
                <input type="text" id="name" class="bg-gray-50 border border-gray-200   text-gray-900 text-sm rounded-lg w-full   block  py-6 pl-3 dark:bg-[#F0F0F0]  dark:placeholder-gray-400 dark:text-gray-600 " placeholder="Enter Your Name" required/>
            </div>
            <div class="mb-8 w-10/12 mx-auto">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg mx-auto  block w-full py-6 pl-3 dark:bg-[#F0F0F0]  dark:placeholder-gray-400 dark:text-gray-600 dark: " placeholder="Enter Your Email" required />
            </div>
            <div class="mb-8 w-10/12 mx-auto">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Message</label>
                <textarea id="message" rows="4" class="block w-full border border-gray-200 text-sm text-gray-900 bg-gray-50 rounded-lg mx-auto   focus:border-blue-500 py-6 pl-3 dark:bg-[#F0F0F0]  dark:placeholder-gray-400 dark:text-gray-600 dark: " placeholder="Enter Your Message" required></textarea>
            </div>
            <div class="mt-10 w-10/12 mx-auto">
                <button className="bg-[#7843E9] max-md:w-full text-base hover:bg-[#9166ec] text-gray-100 font-bold py-4 md:px-10 rounded uppercase tracking-widest">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactFrom;