import React from 'react';

const About = () => {
    return (
        <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
         <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
  
          <p className="text-xl mt-15">
          Software Developer with Full stack web ,Mobile app development capabilities with background knowledge of 
          of MERN stacks ,Flutter and the DotNet along with a drive to building applications with the utmost efficiency.Strong understand
          of the SDLC process willing to be an asset for and organization.
          </p>
          <br />

          <p className="text-3xl font-bold inline py-2">Few Highlights</p>
          <ul className="text-xl mt-15">
            <li>full stack web & Mobile Development </li>
            <li>Development of a user Drowsiness Detection using Python  </li>
            <li>Windows Form / console applications C# .Net </li>
            <li>React</li>
            <li>Kali Linux ethical hacking</li>
            <li>figma </li>
            <li>Undestanding of UI libraries like Material-Ui & Bootstrap </li>
          </ul>
        </div>
      </div>
    );
}

export default About;
