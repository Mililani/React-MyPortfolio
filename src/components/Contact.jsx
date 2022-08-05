import React from 'react';

const Contact = () => {
    return (
        <div
        name="contact"
        className="w-full h-screen bg-gradient-to-b from-black to-gray-800 py-4 text-white"
      >
        <div className="flex flex-col p-4  max-w-screen-lg mx-auto h-full">
        <di className="pt-13">
                <p className="  text-3xl max-w-md font-bold border-b-4 border-gray-800  
                p-2 inline ">
                    Contact</p>
                <p className="py-6">Feel free to contact me </p>
            </di>
  
          <div className=" flex justify-center items-center">
            <form
              action="https://getform.io/f/2ccc22ca-d9f0-4930-a706-fa747b1e6ed9"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>
  
              <button className="text-white bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Contact;
