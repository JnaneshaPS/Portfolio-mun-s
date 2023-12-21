import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#000000]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
           I am highly skilled professional in the field of full-stack development, 
          showcasing a remarkable proficiency in both front-end and back-end technologies. 
          With a name that suggests a deep connection to knowledge,
           I have proven to be a valuable asset in the ever-evolving world of web development.
           Beginning the journey in the tech industry with a passion for creating seamless and 
           efficient digital experiences.
          </p>
          <p className='py-2 text-gray-600'>
           
     In 2022, I embarked on a journey into the realm of full-stack development, and since then,  
      Proficient in React.js, I have mastered the art of building dynamic and interactive user interfaces.
       In the realm of backend development, I am well-versed in MongoDB, 
     utilizing its NoSQL capabilities for flexible and scalable data storage.
     As I continue to evolve in the full-stack landscape, I am keen on expanding my 
     proficiency in technologies such as Node.js to unify my development stack and exploring
     advanced concepts like state management and testing for building robust and scalable applications..
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;