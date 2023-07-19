import React from 'react';
import Image from 'next/image';
import OwnImage from '../../../public/assets/pictures/reduced.jpg'

const About = () => {
    return(
        <div id="About"> 

<section className="text-black-800 body-font bg-fixed bg-cover bg-center 
custom-image">

  <div className="container flex flex-wrap px-5 py-6 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/3 lg:pr-10 md:pr-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
      <Image
        className="object-cover object-center rounded mx-auto 
        -mt-30 ml-8"
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

      I am a professional <b> Electronics Engineer</b> registered with <b>Pakistan 
      Engineering Council (PEC # Electro / 17577)</b>. I have passed <b>Bachelors of Electronics Engineering</b> from <b>Dawood University of 
      Engineering & Technology (DUET), Karachi, Pakistan</b> in <b>2012</b>. I 
      have been working as an <b>Electronics Engineer</b> in different 
      organizations since 2012. Before 2012, i have done <b>Intermediate 
      (Pre-Engineering)</b> from <b>D.J Sindh Govt. Science College, Karachi, 
      Pakistan</b> in <b>2004</b> & <b>Matriculation (Science)</b> from <b>Iqra Huffaz Boys Secondary School, Karachi, Pakistan</b> in <b>2002</b>.      
      </p> 
      <p className="mb-8 leading-relaxed">
      I am also enthusiast of <b>Artificial Intelligence, Data Science, 
      Machine Learning, Deep Learning</b> & <b>Natural Language Processing (NLP)</b>. 
      Experience includes using algorithms & projects in my <b>“AI & DS”</b> 
      course at <b>“Saylani Welfare International Trust”</b> under the 
      initiative of <b>“Presidential Initiative for Artificial Intelligence 
      & Computing (PIAIC) - Saylani Mass IT Training Program (SMIT)”</b>. 
      
      </p>
      <div className="flex justify-center">
        <a href = "../../assets/my CV/CV - Engr. Junaid Jahangir Qazi - 25-06-23.pdf" 
        target='_blank'>
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