import React from 'react'

const Gallery = () => {
    return (
        <div id='gallery' className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img
                        src="https://images.unsplash.com/photo-1549675584-c22bde15df72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                        alt="/"
                        className='w-full h-full object-cover'
                    />
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1633603125151-6a3c1a4778a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80"
                        alt="/"
                        className='w-full h-full object-cover'
                    />
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1439754389055-9f0855aa82c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80"
                        alt="/"
                        className='w-full h-full object-cover'
                    />
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1555505324-d1ba066a38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="/"
                        className='w-full h-full object-cover'
                    />
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1593278091708-261619ad2756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80"
                        alt="/"
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Gallery