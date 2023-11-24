import React from 'react'

const PageHero = () => {
  return (
      <div className="bg-gray-100">
          <section className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-16 flex
items-center ">
              <div className="h-full w-full absolute top-0 left-0 z-0">
                  <img src="images/cover-bg.jpg" className="w-full h-full object-cover opacity-20" />
              </div>
              <div className="w-full relative  z-10 lg:mt-16 flex justify-center items-center py-4">
                  <div className='text-center md:mt-12'>
                      <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                          Book an appointment</h1>
                      <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">Welcome to the Dentist Office of Dr. Thomas
                          Dooley,
                          where
                          trust
                          and comfort are priorities.</p>
                      {/* <a href="#" className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold">Book
                          Appointment</a> */}
                  </div>
              </div>
          </section>
      </div>
  )
}

export default PageHero