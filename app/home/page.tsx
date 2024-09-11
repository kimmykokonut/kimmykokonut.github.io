"use client";

import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="home" role="region" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Kim Robinson
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            {isClient && (
              <TypeAnimation
              sequence={[
                'Full-stack Developer',
                1000, // Waits 1s
                'Forager', 
                1000, 
                'Software Engineer',
                1000,
                'Web Developer',
                1000  
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em', display: 'inline-block' }}
            />
            )}
            </p>
          <div>
            <button className="px-4 py-2 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 text-white">GitHub</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 hover:bg-slate-800 "><span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-3 py-1 text-white">LinkedIn</span></button>
          </div>
        </div>
        <div className="col-span-5 mt-4 lg:mt-0">
          <img className="object-cover rounded-full mx-auto p-3 h-[388px] w-[300px] md:h-[550px] md:w-[420px]" src="./static/hunt.jpg" alt="person standing in the forest" />
        </div>
      </div>
    </section>
  )
}
export default Hero;