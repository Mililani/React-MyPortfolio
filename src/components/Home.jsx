import React from 'react';
import {BiSkipNext} from 'react-icons/bi';
import {Link} from 'react-scroll';


const Home = () => {
    /* the name in  the div will be made use for smooth scrolling */
    return (
        <div name ="home" 
        className="  h-screen w-full bg-gradient-to-b from-gray-800 to-black
    ">
            <div className=" max-w-screen-lg px-3 mx-auto flex flex-col  justify-center
            
                 h-full md:flex-row pt-32">
                    
                <div className=" pt-10 mx-auto flex flex-col justify-center h-full">
                     <p className='text-pink-600'>Hi, my name is</p>
                     <p className="text-3xl   text-indigo-500 ">
                         Mililani Rakhetsi
                    </p>
                    <p className="text-4xl   sm:text-7xl font-bold text-white md:w-56">
                         I'm a Software Developer
                    </p>
                         <p className="text-xl text-white py-4 max-w-md">
                             Self-driven, motivated software Developer , possessing great leadership skills, adaptability, 
                             ability to work in a team environment, possessing strong time management, planning, coordination, and observation skills. Collaborative, 
                                goal driven and forward-thinking Software Developer enthusiastic in software development and the Fourth Industrial Revolution (4IR).
                        
                          </p>


                          <di className="pb-24">
                       
                      <Link  to="portfolio"  smooth duration={500} className="group text-white
                         w-fit
                          px-6
                           py-3 my-2
                           flex items-center rounded-md
                           bg-indigo-500
                           cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <BiSkipNext size={20} className="ml-1"/>
                            </span>
                        </Link>
                    </di> 
                               

                 </div> 
            </div>
           
        </div>
    );
}

export default Home;
