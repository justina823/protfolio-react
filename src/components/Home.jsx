import React from 'react'
import {HiArrowRight} from 'react-icons/hi'
import Background from '../assets/background.jpg'



const Home = () => {
   
  return (
    <div name='home' style={{backgroundImage:`url(${Background})`} } className='w-full h-screen bg-[#0a192f] mx-auto home-div'>
        {/* container */ }

        <div className='max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full'>
            <p className='text-[#eb8277]'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#eb8277]'>Justina Chan</h1>
            <h2 className='text-2xl sm:text-4xl font-bold text-[#f1f1f1]'> I'm a Software developer </h2>
          
            <p className='text-[#f1f1f1] py-4 max-w-[700px] '>  I am a hard-working, high initiative, and detail-oriented person. I can't wait to challenge myself. <br/>
          
                Innovative tech and business mind with more than 2 years of experience working as a software and web developer. Capable of working with a variety of technology and workplaces. Valuable team member which worked with many professionals throughout different fields. Extensive experience with web development, front, and backend. Very adaptable and fast learner with unique ideas and contributions to businesses.</p>
            <div> 
                <button className='group text-white  border-2 px-12 py-3 my-2 flex items-center hover:bg-[#eb8277] hover:border-[#eb8277] button-div'>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowRight className='ml-3'/>
                        </span>
                </button>
            </div>
      
     

        </div>



    </div>
  )
}

export default Home