import React from 'react';
import drowsyness from "../assists/Portfo/drowsyness.png"
import Port from "../assists/Portfo/webpage.jpg";


const Porrtfolio = () => {
const portfolio =[
    {
        id: 1,
        src:drowsyness,
        code:"https://github.com/Mililani/DrowsinessSystem",
        demo:"##",
    },
    {
        id:2,
        src:Port,
        code:"https://github.com/Mililani/React-MyPortfolio",
        demo:"https://mililanirakhetsi-potfolio.netlify.app",
    }
]

    return (
        <section name="portfolio" className=" bg-gradient-to-b from-gray-800 to-black
        h-screen w-full text-white">
            <div className="p-16 mx-auto flex flex-col  w-full 
                 h-full justify-center
                 ">
                 <div className=" px-16">
                             <p className="text-3xl  font-bold inline border-b-4 border-gray-500 ">
                         Portfolio
                                  </p>
                             <p className="py-4">List of projects  </p>
          </div>
                <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4
                      px-16 sm:px-16">
                {
                    portfolio.map(({id,src,code,demo})=> (
                        
                    
                    <div key={id} className=" shadow-md w-4/5  shadow-gray-600 rounded-lg">
                        <img src={src} alt=""  className=" rounded-md duration-300 hover:scale-105
                             "/>
                             <div className="flex items-center justify-center">
                                 <a href={demo}  className="w-1/2 px-4 py-3 m-4 duration-300 hover:scale-105 ">Demo</a>
                                 <a  href={code}className="w-1/2 px-4 py-3 m-4 duration-300 hover:scale-105 "> Code </a>
                             </div>
                     </div>
                    
                    ))
                }
                </div>
                </div>
            
        </section>
    );
}

export default Porrtfolio;
