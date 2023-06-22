import React from "react";
import Image from "next/image";
import Link from "next/link";
import MachineLearn from "../../../public/assets/pictures/a.jpeg";
import DeepLearn from "../../../public/assets/pictures/bb.jpeg"
import LabView from "../../../public/assets/pictures/Labview.png"
import MatLab from "../../../public/assets/pictures/c.png"
import WebApp from "../../../public/assets/pictures/d.jpeg"
import CompVision from "../../../public/assets/pictures/e.jpeg"
const Project = () => {
    return (
        <div id='Project'> 

<section className="text-black-800 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full -mt-14">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-black-900">
        My Projects
      </h1>
      <div className='w-[215px] h-[4px] bg-blue-800 text-center ml-96'> </div>
      <br/>
      <p className="lg:w-2/3 mb-20 mx-auto leading-relaxed text-base font-medium">
        Listed here some of the glimpses of my projects related to Web Development, 
        Machine Learning, Deep Learning, Data Science, and Artificial Intelligence.
        Also listed some of my projects related to my profession as an 
        Electronics Engineer, worked on different projects related to Embedded Systems,
        Microcontrollers, Arduino, MATLAB & LabVIEW.   
      </p>
    </div>
    <div className="flex flex-wrap -m-8 -mt-[5rem]">

        {/* Project 1 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer ">
        <div className="flex relative">
          <Image
            alt="gallery"
            width={600}
            height={800}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={MachineLearn}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-800 mb-1">
              Machine Learning Project
            </h2>
            <h1 className="title-font text-lg font-medium text-black-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <Link href={"#"}>
            <p className="leading-relaxed text-blue-800 hover:underline">
                View Project
            </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            width={600}
            height={800}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={DeepLearn}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-800 mb-1">
              Deep Learning Project
            </h2>
            <h1 className="title-font text-lg font-medium text-black-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <Link href={"#"}>
            <p className="leading-relaxed text-blue-800 hover:underline">
                View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={WebApp}
            width={600}
            height={800}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The 400 Blows
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <Link href={"#"}>
            <p className="leading-relaxed text-blue-800 hover:underline">
                View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={LabView} 
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              LabVIEW
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Neptune
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <Link href={"#"}>
            <p className="leading-relaxed text-blue-800 hover:underline">
                View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={MatLab}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              MATLAB & Simulink 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Holden Caulfield
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <Link href={"#"}>
            <p className="leading-relaxed text-blue-800 hover:underline">
                View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={CompVision}
            width={600}
            height={800}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Alper Kamu
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <Link href={"#"}>
            <p className="leading-relaxed text-blue-800 hover:underline">
                View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
export default Project