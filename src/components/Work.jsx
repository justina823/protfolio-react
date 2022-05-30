import React from 'react'
import iheauthbeauty from '../assets/ihealthbeauty.png'
import firstmet from '../assets/firstmet.png'
import cryto from '../assets/Cryto.png'
import todolist from '../assets/todolist.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#f1f1f1] text-[#171C20]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

             <div className='px-12'> 
             <p className='text-4xl font-bold inline border-b-4 border-[#eb8277]  '>Work</p>
              <p className='py-6'>// Check out some of my recent work</p>
            </div>

                {/* container*/}
            <div className='px-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div style={{backgroundImage:`url(${iheauthbeauty})`} }className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    Ecommerce website

                  </span>

                  <div className='pt-8 text-center'>
                  <a href='http://ihealthbeauty.co/index.php/en/' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit Website</button>
                    </a>

            
                </div>
                </div>
                
              </div>


            
            
              <div style={{backgroundImage:`url(${firstmet})`} }className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    Cafe website

                  </span>

                <div className='pt-8 text-center'>
                  <a href='https://www.firstmetcafe.com.au/' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit Website</button>
                    </a>
                </div>
                </div>
                
              </div>

              <div style={{backgroundImage:`url(${cryto})`} }className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      Crypto

                  </span>

                  <div className='pt-8 text-center'>
                  <a href='https://github.com/justina823/Crypto-tracker'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                    </a>

                  
                </div>
                </div>
                
              </div>
              <div style={{backgroundImage:`url(${todolist})`} }className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                          Todo List 

                      </span>

                      <div className='pt-8 text-center'>
                      <a href='https://github.com/justina823/todo-list'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                        </a>

                      
                    </div>
                    </div>

                    </div>


            
            
           
            </div>

        </div>
       
            
    </div>
  )
}

export default Work