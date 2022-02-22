import React from 'react'

function About(props) {
  const { goAbout } = props
  return (
    <div className="flex min-h-screen items-center justify-center px-6 md:px-12 xl:px-0">
      <div className="w-full xl:max-w-5xl">
        <div className="w-full sm:flex">
          <div className="w-full">
            <div className="font-medium text-primary">Hi, my name is</div>
            <div className=" my-3 text-4xl font-bold text-gray-200 md:my-5 md:text-5xl xl:text-6xl">
              Ricky Pranaya.
            </div>
            <div className=" mb-3 text-3xl font-bold text-gray-400 md:mb-5 md:text-5xl xl:text-6xl">
              I'm a Software Engineer.
              {/* 💻📱 */}
            </div>
            <div className="mb-12  text-gray-400 md:w-3/4 xl:w-2/3">
              Specializing in building web and mobile apps{' '}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-lg font-bold text-transparent">
                Fullstack
              </span>
              . My goal is to develop accessible, human centered digital
              experience with modern designs.
            </div>
          </div>
          <div className="relative sm:ml-4 mb-8 flex w-full items-center justify-center sm:mb-0 sm:w-1/4">
            <img
              src="me.svg"
              className="bg-gray-300 h-auto w-1/2 object-contain sm:w-full"
            />

            <div className="absolute -top-2 -right-2 h-full w-full border-primary lg:border-t-2 lg:border-r-2  xl:top-3 xl:h-4/5" />
          </div>
        </div>
        <div
          onClick={goAbout}
          className="w-fit  cursor-pointer rounded border-2 border-primary px-6 py-3 text-sm font-medium text-primary duration-200 hover:bg-primary hover:bg-opacity-10"
        >
          Check out more about me!
        </div>
      </div>
    </div>
  )
}

export default About
