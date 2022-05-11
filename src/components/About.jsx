import React from 'react';
import Profile from '../assets/Profile.jpg' 
import Resume from '../assets/Justina-resume.pdf'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#f1f1f1] text-[#171C20] px-12'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#eb8277]'>
              About
            </p>
          </div>
          
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-left text-4xl font-bold'>
              <p>Hi.I'm Justina!</p>
              <img src={Profile} alt="Profile" style={{width:'70%'} }/>
            </div>
            <div>
              <p>
                    I am a hard-working, high initiative, and detail-oriented person. I can't wait to challenge myself. <br/>
          
                    Innovative tech and business mind with more than 2 years of experience working as a software and web developer. Capable of working with a variety of technology and workplaces. Valuable team member which worked with many professionals throughout different fields. Extensive experience with web development, front, and backend. Very adaptable and fast learner with unique ideas and contributions to businesses.<br/>
                    
                    Innovative Web Developer with the project of experience in website design such as the Firstmet Cafe website. Demonstrated talent for front and back-end web development to optimize online presence. Experience expert in languages such as HTML, CSS, PHP, and Python as well as scripting languages JavaScript.
                    </p> 
                  
                    <div className='pt-8 text-center'>
                        <a href={Resume} target="_blank">
                    <button className='text-[#171C20]   border-[#eb8277] border-2 px-12 py-3 my-2 flex items-center hover:bg-[#eb8277] hover:border-[#eb8277]'>Download CV</button>
                    </a>
                </div>

                  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;