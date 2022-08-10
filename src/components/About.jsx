import React from 'react';

const About = () => {
    return (
        <div
        name="about"
        className="h-screen w-full bg-gradient-to-b from-gray-800 to-black 
        "
      >
         <div className="  p-5 mx-auto flex flex-col  w-full 
                 h-full justify-center 
                 ">
         <div className=" m-auto flex flex-col  h-full" >

         <div className="pb-5 pt-16">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-gray-500">
              About
            </p>
          </div>
  
          <p className="text-xl  text-bold text-white  max-w-md
          ">
          Software Developer with Full stack web ,Mobile app development capabilities  background knowledge of 
          of MERN stacks ,Flutter and the DotNet along with a drive to building applications with the utmost efficiency.Strong understand
          of the SDLC process willing to be an asset for and organization.
          </p>
          <br />

          <p className="text-4xl font-bold inline  text-gray-500">Few Highlights</p>
          <ul className="text-xl text-white pb-6">
            <li>full stack web & Mobile Development </li>
            <li>Development of a user Drowsiness Detection using Python  </li>
            <li>Windows Form / console applications C# .Net </li>
            <li>React</li>
            <li>flutter</li>
          </ul>





         </div>
        </div>
      </div>
    );
}

export default About;
