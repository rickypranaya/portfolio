import React from 'react'
import Feeds from './Feeds'
import classNames from 'classnames'

const skillset = [
  { name: 'TypeScript', icon: 'typescript.svg', color: 'bg-white' },
  { name: 'JavaScript', icon: 'javascript.svg', color: 'bg-transparent' },
  { name: 'React.js', icon: 'react.svg', color: 'bg-transparent' },
  { name: 'Next.js', icon: 'next.svg', color: 'bg-transparent' },
  { name: 'Node.js', icon: 'node.svg', color: 'bg-transparent' },
  { name: 'Tailwind CSS', icon: 'tailwind.svg', color: 'bg-transparent' },
  { name: 'NX Monorepo', icon: 'nx.svg', color: 'bg-white', size: 'h-5 w-5' },
  { name: 'React Native', icon: 'react.svg', color: 'bg-transparent' },
  { name: 'MySQL', icon: 'mysql.svg', color: 'bg-white' },
  {
    name: 'Flask',
    icon: 'flask.svg',
    color: 'bg-transparent',
    size: 'h-5 w-5',
  },
  {
    name: 'Laravel',
    icon: 'laravel.svg',
    color: 'bg-transparent',
    size: 'h-5 w-5',
  },
  { name: 'HTML & CSS', icon: 'html.svg', color: 'bg-transparent' },
  { name: 'Python', icon: 'python.svg', color: 'bg-transparent' },
  {
    name: 'Firebase',
    icon: 'firebase.svg',
    color: 'bg-transparent',
    size: 'h-7 w-7',
  },
  { name: 'Git', icon: 'git.svg', color: 'bg-transparent' },
]

const Header = () => {
  return (
    <div className="mb-5 flex items-center sm:mb-8">
      <div className="text-xl sm:text-2xl">
        <span className="text-primary">01.</span>{' '}
        <span className="font-semibold text-white">About Me</span>
      </div>
      <div className="mx-5 hidden h-0 w-2/5 border-b border-dark-base sm:block" />
    </div>
  )
}

const Skill = ({ item }) => {
  return (
    <div className="my-2 flex items-center space-x-3">
      <div
        className={classNames(
          'flex h-6 w-6 items-center justify-center overflow-hidden rounded',
          item.color
        )}
      >
        <img
          src={`skillset/${item.icon}`}
          className={classNames(' object-cover', item.size)}
        />
      </div>
      <div className="text-sm font-medium text-gray-300">{item.name}</div>
    </div>
  )
}

function About(props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-darkest py-32  px-6 md:px-12 xl:px-0">
      <div className="w-full max-w-md md:max-w-xl xl:max-w-4xl  ">
        <div className="flex flex-col xl:flex-row">
          <div className="space-y-5 text-gray-400 xl:w-3/5 xl:pr-8">
            <Header />

            <p>
              It started 3.5 years ago when I had these many ideas of apps that
              could perhaps give an impact on the community. To see those ideas
              coming into creation, with my basic HTML, CSS and vanilla
              javascript knowledge I started to learn my first Mobile
              Development framework which was Flutter (dart language).
            </p>
            <p>
              Fast-forward to today, I've created quite a handful of softwares
              from Web app and Mobile app to Desktop app and had the privilege
              to lead a number of projects from Final Year Project to a team of
              developers in a Startup.
            </p>
            <p>
              My main focus these days is to always keep up with the latest
              technology and improve my skills individually as well as on teams.
            </p>
          </div>
          <div className="mt-20 mb-12 flex items-center justify-center xl:mb-0  xl:mt-0 xl:w-2/5 xl:pl-12 ">
            <Feeds />
          </div>
        </div>
        <div className=" mt-12 xl:mt-8">
          <div className="mb-4 font-medium  text-white md:text-xl">
            Technologies I’ve been working with recently:
          </div>
          <div className="grid w-full grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {skillset.map((item) => (
              <Skill item={item} key={item.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
