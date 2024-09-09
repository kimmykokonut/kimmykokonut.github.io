"use client"

import Card from "@/components/Card";

const Hero = () => {
  return (
    <section id="home"
      role="region"
      aria-labelledby="hero-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Kim Robinson</h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">words and stuff and things....</p>
        </div>
        <div className="col-span-5">
          <div className="">
            <img className="rounded-full mx-auto p-3 h-[388px] w-[300px] md:h-[550px] md:w-[420px]" src="./static/hunt.jpg" alt="person standing in the forest" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero;