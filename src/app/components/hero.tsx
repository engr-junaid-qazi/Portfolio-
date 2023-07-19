"use client"
import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image'
import OwnPic from '../../../public/assets/pictures/new2.jpg'
import Link from 'next/link'

const Hero = () => {
  return (


    <section className="text-black-800 body-font 
    bg-fixed bg-cover bg-center custom-image">
      <div className="container mx-auto flex justify justify-center px-5 py-12 
      md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-10 md:pr-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

          <strong className="pl-0 title-font sm:text-xl text-lg mb-4 font-bold text-black-900">
            I am an
            <br className='hidden lg:inline-block'/>
            <Typewriter
              options={{
                strings: ['Electronics Engineer, Artificial Intelligence, Machine Learning, Deep Learning Enthusiast & Web Developer.'],
                delay: 80,
                deleteSpeed: 60, 
                autoStart: true,
                loop: true,
              }}
            />
        </strong>

          <div className='w-[400px] h-[4px] bg-blue-800'> </div>
          <p className="mt-2 mb-4 leading-relaxed">

            As an <strong> Electronics Engineer </strong> registered with
            <strong> Pakistan Engineering Council (PEC # Electro / 17577)
            </strong>, I am an enthusiastic, motivated, and goal-oriented
            professional who is passionate about leveraging cutting-edge
            technologies to deliver state-of-the-art solutions in
            the fields of <strong> Artificial Intelligence, Data Science,
              Machine Learning </strong> and <strong> Deep Learning. </strong>
          </p>

          <p className="mb-4 leading-relaxed">
            With a strong foundation in <strong> Electronics Engineering </strong>
            and a keen interest in emerging technologies, I am
            constantly learning and acquiring new skills in these fields.
            My dedication to staying up-to-date with the latest developments
            in these areas allows me to bring innovative and creative
            solutions to complex problems.
          </p>
          <p className="mb-4 leading-relaxed">
            As an <strong>AI enthusiast </strong>, I possess a deep
            understanding of the underlying principles of <strong>
              Artificial Intelligence </strong>, including <strong>
              computer vision, natural language processing </strong> and
            <strong> robotics.</strong> I am also skilled in a variety
            of programming languages and analytical tools that enable
            me to develop and implement advanced <strong>
              AI algorithms</strong> and models.
          </p>

          <p className="mb-4 leading-relaxed">
            In addition to my technical expertise, I have excellent
            problem-solving skills and a strong work ethic, which
            allow me to work collaboratively with others to achieve
            project goals. I am a results-driven individual who is
            committed to delivering high-quality work on time and within budget.
          </p>

          <p className="mb-4 leading-relaxed">
            I am excited about the prospect of using my skills and
            expertise to help organizations realize the full potential
            of <strong> Artificial Intelligence, Data Science,
              Machine Learning</strong> and <strong>Deep Learning.
            </strong> If you are looking for a dedicated and talented
            professional who is passionate about these fields, then
            I would be an excellent addition to your team.
          </p>

          <br/>
          <div className="flex justify-center">
            <Link href={'#Contact'}>
            <button className="text-white bg-blue-600 hover:bg-blue-800 
      border-2 py-2 px-6 focus:outline-none rounded-lg text-lg shadow-2xl">
              Contact
            </button>
              </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-80">
          <Image
            className="mr-0 object-cover object-center rounded mx-auto"
            alt="Engr. Junaid Jahangir Qazi"
            width={350}
            height={200}
            src={OwnPic}
          />
        </div>
      </div>
    </section>

  )
}

export default Hero 