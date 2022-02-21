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
    <div className="mb-8 flex items-center">
      <div className="text-2xl">
        <span className="text-primary">01.</span>{' '}
        <span className="font-semibold text-white">About Me</span>
      </div>
      <div className="mx-5 h-0 w-2/5 border-b border-dark-base" />
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
    <div className="flex min-h-screen py-32 items-center justify-center bg-dark-darkest">
      <div className="w-full max-w-4xl ">
        <div className="flex">
          <div className="w-3/5 space-y-5 pr-8 text-gray-400">
            <Header />

            <p>
              It's all started 3 years ago when I had these many ideas of
              creating apps that could give impacts to the community. Hence with
              my basic HTML, CSS and vanilla javascript knowledge I started to
              learn my first Mobile Development framework which was Flutter
              (dart language).
            </p>
            <p>
              Fast-forward to today, I've created quite a handful of softwares
              from Web app and Mobile app to Desktop app and had the privillege
              to lead number of projects from Final Year Project to team of
              developers in a Startup.
            </p>
            <p>
              My main focus these days is to always keep up with the latest
              technology and improving my skills individually as well as with
              the teams.
            </p>
          </div>
          <div className="flex  w-2/5 items-center pl-12 ">
            <Feeds />
          </div>
        </div>
        <div className="mt-8">
          <div className="mb-4 text-xl font-medium text-white">
            Technologies I’ve been working with recently:
          </div>
          <div className="grid w-full grid-cols-5">
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
