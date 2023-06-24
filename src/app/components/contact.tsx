import React from "react";
import Link from 'next/link'

const Contact = () => {
    return (
    <div id='Contact' className="-mt-12">
        <section className="text-Black-800 body-font relative bg-fixed bg-cover bg-center custom-image">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.982535821037!2d67.07764857358343!3d24.8985773279044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ed9bdba183b%3A0xa6167ed864af710f!2sV3XJ%2BC25%20Ashraf%20Square%20Apartment%2C%20Block%2017%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1687522301089!5m2!1sen!2s"
        style={{ filter: " contrast(1.2) " }}
      />
      <div className="bg-blue-300 relative flex flex-wrap py-6 
      shadow-xl rounded-lg hover: tex-lg ">
        <div className="lg:w-1/2 px-6 ">
          <h2 className="title-font font-bold text-black-800 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1 text-black-800">
            A-20, Ashraf Square, Block-17, Gulshan-e-Iqbal, Karachi.          
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-bold text-black-800 tracking-widest text-xs">
            EMAIL
          </h2>
          <Link href='#' className="cursor-pointer text-blue-600 
          leading-relaxed hover:underline underline-offset-4">engr.junaid.qazi@hotmail.com</Link>
          <h2 className="title-font font-bold text-black-800 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">+92-333-2564221</p>
        </div>
      </div>
    </div>
    <div className=" lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-2 md:mt-0">
      <h2 className="text-black-800 text-3xl mb-4 font-bold title-font">
        Contact
      </h2>
      <div className='w-[150px] h-[4px] bg-blue-800'> </div>
      <br/>
      <p className="leading-relaxed mb-5 text-black-800 font-semibold">
        If you have any query, then feel free to contact me.
      </p>
      <form action="https://formspree.io/f/mwkdepkp" method='POST'>
      <div className="relative mb-4 font-medium">
        <label htmlFor="name" className="leading-7 text-sm 
        text-black-800">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your Name"
          className="w-full bg-white rounded-lg border-2 
           focus:border-indigo-500 focus:ring-2 
          focus:ring-indigo-200 text-base outline-none text-black-800 py-1 px-3 
          leading-8 transition-colors duration-200 ease-in-out
           hover:border-blue-600 shadow-xl"
           required
        />
      </div>
      <div className="relative mb-4 font-medium ">
        <label htmlFor="email" className="leading-7 text-sm 
        text-black-800">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your E-mail"
          className="w-full bg-white rounded-lg border-2 
          focus:border-indigo-500 focus:ring-2 
         focus:ring-indigo-200 text-base outline-none text-black-800 py-1 px-3 
         leading-8 transition-colors duration-200 ease-in-out
          hover:border-blue-600 shadow-xl"
          required
        />
      </div>
      <div className="relative mb-4 font-medium ">
        <label htmlFor="subject" className="leading-7 text-sm 
        text-black-800">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Enter your Subject"
          className="w-full bg-white rounded-lg border-2 
          focus:border-indigo-500 focus:ring-2 
         focus:ring-indigo-200 text-base outline-none text-black-800 py-1 px-3 
         leading-8 transition-colors duration-200 ease-in-out
          hover:border-blue-600 shadow-xl"
          required
        />
      </div>
      <div className="relative mb-4 font-medium">
        <label htmlFor="message" className="leading-7 text-sm 
        text-black-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          cols={10}
          placeholder="Enter your Message"
          className="w-full bg-white rounded-lg border-2 
          focus:border-indigo-500 focus:ring-2 
         focus:ring-indigo-200 text-base outline-none py-1 px-3 
          transition-colors duration-200 ease-in-out
          hover:border-blue-600 shadow-2xl"
          required 
      
          defaultValue={""}
        />
      </div>
      <br/>
      <button className="text-white bg-blue-600 hover:bg-blue-800 
      border-2 py-2 px-6 focus:outline-none rounded-lg text-lg shadow-2xl ml-20">
        Submit
      </button>
      </form>
    </div>
  </div>
</section>
</div>
    )
}
export default Contact 