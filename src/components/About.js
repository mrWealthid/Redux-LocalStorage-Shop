import React from 'react';

const About = () => {
  return (
    <div
      className='about min-h-screen bg-cover bg-blend-multiply bg-gray-400 bg-center bg-no-repeat flex items-center'
      id='about'
    >
      <div className='text-left ml-5 space-y-3'>
        <p className='text-xl sm:text-2xl md:text-3xl '>
          WELCOME TO WEALTH STORE
        </p>

        <p className='text-lg'>Shopping Made Easy</p>

        <button className='bg-gray-700 w-6/12 rounded-xl py-2 px-4 text-white '>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default About;
