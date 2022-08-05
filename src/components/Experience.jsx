import React from 'react';
import Csharp from '../assists/languages/csharp.png';
import Tailwind from '../assists/languages/tailwind-css-icon.png';
import ReactImg from '../assists/languages/react-logo.png';
import Nod from '../assists/languages/nodejs-logo.png';
import Sql from '../assists/languages/mssqq.png';
import Javascript from '../assists/languages/jjs.png'
import Pytho from '../assists/languages/python.png'
import Mongoose from '../assists/languages/MongoDb.png'
import Dart from '../assists/languages/dart.png'

const Experience = () => {
    const techno = [
        {
          id: 1,
          src: Csharp,
          title: "Csharp",
          style: "shadow-blue-400",
        },
        {
          id: 2,
          src: ReactImg,
          title: "React",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: Javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: Tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        
        {
          id: 5,
          src: Sql,
          title: "Microsoft Sql Server",
          style: "shadow-pink-400",
        },
        {
          id: 6,
          src: Nod,
          title: "Node.js",
          style: "shadow-gray-400",
        },
        {
          id: 7,
          src: Pytho,
          title: "Python",
          style: "shadow-yellow-400",
        },
        {
          id: 8,
          src: Mongoose,
          title: "MongoDB",
          style: "shadow-green-400",
        },
        {
          id: 9,
          src: Dart,
          title: "Daet",
          style: "shadow-blue-400",
        },
      ]

    return  (
    <div name = "experience" className="bg-gradient-to-b from-gray-800 to-black
    w-full h-screen">
        <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col 
        w-full h-full text-white">
            <di className="pt-20">
                <p className="  text-3xl max-w-md font-bold border-b-4 border-gray-800  
                p-2 inline ">
                    Experience</p>
                <p className="py-6">These are the technologies that I've worked with</p>
            </di>
        
            <div className=" w-full grid grid-cols-5 sm:grid-cols-5 gap-8
             text-center py-2 px-12 sm:0">

           {
            techno.map(({id,src,title,style,})=>(
                <div key={id}className={`shadow-md hover:scale-105 duration-500 
               py-2 rounded-lg ${style}`} >
                 <img src={src} alt="" className=" w-20 mx-auto"/>
                 <p className="mt-4">{title}</p>
                </div>
            ))
           }     

         </div>
     </div>

    </div>
    );

};

export default Experience;
