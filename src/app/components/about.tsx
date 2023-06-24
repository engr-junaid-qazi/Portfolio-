import React from 'react';
import Image from 'next/image';
import OwnImage from '../../../public/assets/pictures/reduced.jpg'

const About = () => {
    return(
        <div id="About"> 

<section className="text-black-800 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="-ml-10 container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto 
        -mt-60 ml-20"
        alt="hero"
        src={OwnImage}
        width={350}
        height={200}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col 
    md:items-start md:text-left items-center text-center mt-0 mr-10">
      <h1 className="text-black-800 text-3xl mb-4 font-bold title-font sm:text-4xl">
        About Me
        <div className='w-[170px] h-[4px] bg-blue-800 mt-4'> </div>
        <br className="hidden lg:inline-block" />
        <p className='text-base font-bold text-black-800 mt-0'> 
        Electronic Engieer || AI || ML || DL || DS || NLP Enthusiast & Web Developer
        </p>
      </h1>
      <p className="mb-4 leading-relaxed">

      I am a professional Electronics Engineer registered with Pakistan 
      Engineering Council (Electro / 17577). I have passed Bachelors of 
      Electronics Engineering from Dawood University of Engineering & 
      Technology (DUET), Karachi, Pakistan in 2012. I have been working 
      as an Electronics Engineer in different organizations since 2012. 
      Before 2012, i have done Intermediate (Pre-Engineering) from D.J 
      Sindh Govt. Science College, Karachi, Pakistan in 2004 & 
      Matriculation (Science) from Iqra Huffaz Boys Secondary School, 
      Karachi, Pakistan in 2002.      
      </p> 
      <p className="mb-8 leading-relaxed">
      I am also enthusiast of Artificial Intelligence, Data Science, 
      Machine Learning, Deep Learning & Natural Language Processing (NLP). 
      Experience includes using algorithms & projects in my “AI & DS” 
      course at “Saylani Welfare International Trust” under the 
      initiative of “Presidential Initiative for Artificial Intelligence 
      & Computing (PIAIC) - Saylani Mass IT Training Program (SMIT)”. 
      
      </p>
      <div className="flex justify-center">
        <a href = "../../assets/my CV/CV - DS - New Style - Junaid Jahangir Qazi - 12-03-23.docx">
        <button className="text-white bg-blue-600 hover:bg-blue-800 
      border-2 py-2 px-6 focus:outline-none rounded-lg text-lg shadow-2xl">
          View CV 
        </button>
        </a>
       
      </div>
    </div>
  </div>
</section>

        </div>

    )

}
export default About