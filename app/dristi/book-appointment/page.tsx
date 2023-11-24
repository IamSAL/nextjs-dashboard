
import PageSubHero from '@/app/ui/common/PageSubHero'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
      <PageSubHero />
      <section className="flex flex-col md:flex-row h-screen items-center">
  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 h-screen px-6 lg:px-16 xl:px-24
  flex items-center justify-center">
    <div className="w-full h-100">
      <Link className="font-bold text-2xl" href="/">
        DristiAI
            </Link>
      <h1 className="text-xl md:text-3xl font-bold leading-tight mt-12">Book your appointment with DristiAI in 2
        minutes</h1>
      <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie metus
        turpis. Vivamus mollis diam
        quis erat tincidunt.</p>
      <form className="mt-6" action="#" method="POST">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input type="text"  placeholder="Enter Full Name" className="w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none"  required />
        </div>
        <div className="flex flex-col md:flex-row items-start mt-4 md:-mx-4">
          <div className="w-full md:mx-4">
            <label className="block text-gray-700">Phone Number</label>
            <input type="tel"  placeholder="Enter Phone Number" className="w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
          </div>
          <div className="w-full md:mx-4 mt-4 md:mt-0">
            <label className="block text-gray-700">Treatment</label>
            <div className="relative mt-1">
              <select  className="w-full px-4 py-3 rounded bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none appearance-none" required>
                <option  selected disabled>Select Treatment</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-4">
          <label className="block text-gray-700">Message</label>
          <textarea  placeholder="Write message" className="w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none resize-none" rows={3} required defaultValue={""} />
        </div>
        <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded
        px-4 py-3 mt-4">Book Appointment</button>
      </form>
      <p className="text-sm text-gray-500 mt-12">© 2019 DristiAI - All Rights Reserved.</p>
    </div>
  </div>
  <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 h-screen">
    <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=100"  className="w-full h-screen object-cover" />
  </div>
</section>

    </>
  )
}

export default Page