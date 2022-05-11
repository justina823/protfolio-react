import React from 'react'

const Contact = () => {
  return (
    <div name ='contact' className='w-full h-screen bg-[#171C20] flex justify-center items-center px-12'>
        <form method='POST' action="https://getform.io/f/d6c473da-d8ae-4a30-b1a5-05bcb16b4379" className='flex flex-col max-w-[600px] w-full'>
            <div className=' px-12'>
                <p className='text-4xl font-bold inline border-b-4 border-[#eb8277] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> // Please feel free to contact me if you have any questions, project or collaboration.</p>
            </div>
            <input className='bg-[#f1f1f1] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#f1f1f1]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#f1f1f1] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#eb8277] hover:border-[#eb8277] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>

    </div>
  )
}

export default Contact