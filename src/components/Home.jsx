import React from 'react';

import MyImage from "../assists/prof.png";
import {BiSkipNext} from 'react-icons/bi';
import {Link} from 'react-scroll';


const Home = () => {
    /* the name in  the div will be made use for smooth scrolling */
    return (
        <div name ="home" 
        className="  h-screen w-full bg-gradient-to-b from-gray-800 to-black
        ">

           <div className="max-w-screen-lg mx-auto flex flex-col 
           items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col 
                 justify-center h-full">
                    <h2 className="text-3xl sm:text-7xl font-bold text-white "> 
                    I'm a Software Developer"
                    </h2>
                    <p className="text-white py-4 max-w-md">
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
                <div >
                    <img src={MyImage} alt="Myprofile" 
                    className="rounded-2xl mx-auto w-2/3 md:w-full"
                     />
                </div>
            </div> 
               
        </div>
    );
}

export default Home;
