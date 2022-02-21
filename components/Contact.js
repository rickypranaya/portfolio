import React from 'react'

function Contact(props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-darkest">
      <div className="w-full max-w-2xl ">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 text-5xl font-medium text-primary">
            Get In Touch
          </div>
          <div className="text-center  text-gray-400">
            I’m currently searching for a new career opportunity as a Software
            Engineer with my background in Web and Mobile development. For a
            greater understanding of my professional qualifications, you can
            find my{' '}
            <a
              href="resume.pdf"
              target="_blank"
              className="text-primary hover:text-opacity-80"
            >
              resume
            </a>{' '}
            on the menu and do drop me an Email at{' '}
            <a href="mailto:rpranaya.2000@gmail.com" className="text-white">
              rpranaya.2000@gmail.com
            </a>{' '}
            for a heads up!
          </div>

          <a
            href="mailto:rpranaya.2000@gmail.com"
            className="mt-12 rounded border border-primary px-5 py-3 text-primary duration-200 hover:bg-primary hover:bg-opacity-10"
          >
            Reach Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
