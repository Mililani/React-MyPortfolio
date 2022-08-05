import React from 'react';
import {BiSkipNext} from 'react-icons/bi';
import {Link} from 'react-scroll';


const Home = () => {
    /* the name in  the div will be made use for smooth scrolling */
    return (
        <div name ="home" 
        className="  h-screen w-full bg-gradient-to-b from-gray-800 to-black
        mx-auto flex flex-col items-center justify-center  px-4 md:flex-row
        ">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full
                 h-full">
                    
                <div className="py-16">
                     <p className="text-4xl  sm:text-7xl font-bold text-white ">
                         I'm a Software Developer
                    </p>
                         <p className="text-2xl text-white py-4 max-w-md">
                             Possessing Full-stack knowledge with a Knack to building applications with front and backed and operations,great understand of 
                                 software development life cycle,mobile applications develoment and  highly adptive when learning new technologies and programming languages. 
                          </p>


                          <di>
                       
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
