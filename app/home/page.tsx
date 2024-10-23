"use client";

import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="home" role="region" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-slate-800 dark:text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
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
            <a
              href='https://github.com/kimmykokonut'
              className="button-link">GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/robinson-kim/'
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 hover:bg-slate-800 inline-block text-center">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-3 py-1 text-white hover:text-blue-500">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="col-span-5 mt-4 lg:mt-0">
          <Image
            className="object-cover border-solid border-slate-800 rounded-full mx-auto p-3 h-[388px] w-[300px] md:h-[550px] md:w-[420px]"
            src="/static/hunt.jpg"
            alt="person standing in the forest"
            width={300}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}
export default Hero;