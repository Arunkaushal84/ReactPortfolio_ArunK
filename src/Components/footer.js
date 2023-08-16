import React from 'react'

export default function footer() {
  return (
    <div className=''>
       <footer className='fixed bottom-0 left-0 right-0  p-6 bg-blue-500 text-center'>
         {/* social media icons  */}
         <div className="flex space-x-4 justify-center sm:justify-center">
              <a href="https://github.com/Arunkaushal84">
                <i className=" p-4 uil uil-github "></i>
              </a>
              <a href="#twitter">
                <i className="p-4 uil uil-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit">
                <i className="uil uil-linkedin p-4"></i>
              </a>
              <a href="https://www.facebook.com/kaushal.arun84">
                <i className="uil uil-facebook-f p-4"></i>
              </a>
              

            </div>
      </footer>
    </div>
  )
}
