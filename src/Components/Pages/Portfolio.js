import React from 'react';
import Footer from '../footer'
import githubIcon from '../../assets/github-icon.png'; 
import project1Img from '../../assets/Weatherapp (1).png'
import project2Img from '../../assets/PasswordGenerator.png'
import project3Img from '../../assets/Scheduler.png'
import project4Img from '../../assets/Quiz.png'



export default function Portfolio() {
  // Sample data for cards (you can replace these with your actual project details)
  const projects = [
    {
      id: 1,
      title: 'WeatherApp',
      imageUrl: project1Img,
      githubLink: 'https://github.com/Arunkaushal84/Weather-App_',
      deployedSiteLink:'https://arunkaushal84.github.io/Weather-App/',
    },
    {
      id: 2,
      title: 'Password Generator',
      imageUrl: project2Img,
      githubLink: 'https://github.com/Arunkaushal84/Password-Generator',
      deployedSiteLink: 'https://arunkaushal84.github.io/Password-Generator/',
    },
    {
      id: 3,
      title: 'Scheduler',
      imageUrl: project3Img,
      githubLink: 'https://github.com/Arunkaushal84/Scheduler',
      deployedSiteLink: 'https://arunkaushal84.github.io/Scheduler/',
    },
    {
      id: 4,
      title: 'Quiz',
      imageUrl: project4Img,
      githubLink: 'https://github.com/Arunkaushal84/quiz',
      deployedSiteLink: 'https://arunkaushal84.github.io/quiz/',
    },
    
    

    
  ];

  return (
    <div className="flex bg-white-500 flex-wrap justify-center pb-16">
      {projects.map((project) => (
        <div key={project.id} className=" card max-w-sm rounded overflow-hidden shadow-lg shadow-black m-4">
          <div className="relative box">
            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 w-full p-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2"
              >
                <img src={githubIcon} alt="GitHub" className="w-8 h-8 bg-white blur-[1px] " />
              </a>
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
            </div>
          </div>
          <div className="px-6 py-4 card-title ">
            <div className="flex justify-center">
              <a
                href={project.deployedSiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn p-2 px-4  bg-blue-500 hover:bg-slate-500  rounded-xl  text-white"
              >
                View Deployed Site
              </a>
            </div>
          </div>
        </div>
      ))}
      <Footer/>
    </div>
  );
}
