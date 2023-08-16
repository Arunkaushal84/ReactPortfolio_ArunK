

import React from 'react';
import bg from '../../assets/bg.jpg';
import Footer from '../footer';
import Skills from './Skills'

export default function About() {
  return (
    <div>
    <div id="About " className=" relative ">
      <img src={bg} alt="background" className="w-full h-screen blur-[4px]" />
      <div className=" box m-16 sm:m-46 absolute top-10 xs:top-45 left-10 right-10 bottom-26 sm:bottom-26 bg-white  flex items-center justify-center">
      
        <div className="p-4 m-6">
          <h2 className="text-3xl flex justify-center font-bold mb-10">About Myself</h2>
          <p className="about-para text-wrap text-slate-950 font-serif ">
          I am Arun Kaushal, Professional Mechanical Engineer who understands the importance of continuous learning and skill enhancement in today's rapidly evolving technological landscape. With a strong foundation in mechanical engineering principles and years of industry experience, I have taken the proactive step of delving into the world of coding. Recognizing that coding skills are becoming increasingly valuable in various industries, I am committed to expanding my knowledge beyond my core expertise.
          </p>
          <br />
          <p className="about-para text-wrap text-slate-950 font-serif mb-20">
          In pursuit of coding proficiency showcases my dedication to staying relevant and adaptable in my career. By immersing myself in coding languages and programming concepts, I aim to not only bolster my resume but also to cultivate a versatile skill set that can bridge the gap between mechanical engineering and software development. I have willingness to learn new skills demonstrates his forward-thinking approach and my commitment to remaining an asset in a technology-driven job market.
          </p>
        </div>
      </div>
    </div>
      <Skills/>
      <Footer />
    </div>
  );
}
