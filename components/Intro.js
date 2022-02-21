import React from 'react'

function About(props) {
  const { goAbout } = props
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-5xl ">
        <div className="font-medium text-primary">Hi, my name is</div>
        <div className="my-5 text-6xl font-bold text-gray-200">
          Ricky Pranaya.
        </div>
        <div className="mb-5 text-6xl font-bold text-gray-400">
          I'm a Software Engineer.
        </div>
        <div className="mb-12 w-1/2 text-gray-400">
          Specializing in building web and mobile apps{' '}
          <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-lg font-bold text-transparent">
            Fullstack-ly
          </span>
          . My goal is to develop accessible, human centered digital experience
          with modern designs.
        </div>
        <div
          onClick={goAbout}
          className="w-fit cursor-pointer rounded border-2 border-primary px-6 py-3 text-sm font-medium text-primary duration-200 hover:bg-primary hover:bg-opacity-10"
        >
          Check out more about me!
        </div>
      </div>
    </div>
  )
}

export default About
