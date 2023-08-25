import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img
                src="https://images.unsplash.com/photo-1606674556490-c2bbb4ee05e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80"
                alt="/"
                className='w-full h-full object-cover'
            />
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] flex flex-col text-white p-4'>
                    <h1 className='font-bold text-4xl'>Heading 1 title</h1>
                    <h2 className='text-4xl py-4 italic'>Heading 2 title</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero