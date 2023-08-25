import React from 'react'

const ContactForm = () => {
    return (
        <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700'>Send us a message</h2>
            <p className='text-center text-gray-700 py-2'>We're here to tick!</p>
            <div className='grid md:grid-cols-2'>
                <img
                    src="https://images.unsplash.com/photo-1575203091586-611fe505bb0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="/"
                    className='w-full md:h-full object-cover max-h-[500px] h-[200px]'
                />
                <form>
                    <div className='grid grid-cols-2'>
                        <input className='border m-2 p-2' type="text" placeholder='First' />
                        <input className='border m-2 p-2' type="text" placeholder='Second' />
                        <input className='border m-2 p-2' type="email" placeholder='email' />
                        <input className='border m-2 p-2' type="tel" placeholder='tel' />
                        <input className='border col-span-2 m-2 p-2' type="text" placeholder='Second' />
                        <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
                        <button className='col-span-2 m-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm