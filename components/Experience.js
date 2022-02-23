import React, { useState } from 'react'
import classNames from 'classnames'
const Header = () => {
  return (
    <div className="mb-5 flex items-center sm:mb-8">
      <div className="text-xl sm:text-2xl ">
        <span className="text-primary">02.</span>{' '}
        <span className="font-semibold text-white">Where I've Worked</span>
      </div>
      <div className="mx-5 hidden h-0 md:w-1/2 w-1/3 border-b border-dark-base sm:block" />
    </div>
  )
}

function Experience(props) {
  const { goProject } = props
  const [activeTab, setActiveTab] = useState('Mantheos')

  const Button = (props) => {
    const { name } = props
    let active = name == activeTab ? true : false
    return (
      <div
        onClick={() => {
          setActiveTab(name)
        }}
        className={classNames(
          'flex w-full min-w-fit cursor-pointer justify-center px-6 py-3 text-sm font-medium duration-200  hover:bg-opacity-10  hover:text-primary md:justify-start',
          active ? ' text-primary' : 'text-gray-400 hover:bg-primary'
        )}
      >
        {name}
      </div>
    )
  }

  const Item = ({ children }) => {
    return (
      <div className="mt-2 items-center">
        <div className="flex">
          <div className=" mt-2 flex h-full  flex-grow">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
          <div className="w-full pl-4 text-sm text-gray-400">{children}</div>
        </div>
      </div>
    )
  }

  const DisplayMantheos = () => {
    return (
      <div className={classNames('w-full sm:pl-6')}>
        <div className="text-xl font-medium text-white">Software Engineer</div>
        <div className="mb-6 text-sm text-gray-400">
          Jan 2022 - Feb 2022, Singapore
        </div>
        <Item>
          <a
            href="https://nftcompass.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-primary hover:text-opacity-80"
          >
            NFT Compass
          </a>{' '}
          - Build and design the frontend of a modern and features rich NFT
          Analytics tool.
        </Item>
        <Item>
          Build and design API Web App for clients and internal uses integrated
          with JWT Security.
        </Item>
        <Item>
          {' '}
          Rebuild Mantheos{' '}
          <a
            href="https://www.mantheos.com/blog"
            target="_blank"
            className="font-medium text-primary hover:text-opacity-80"
          >
            Blog App
          </a>{' '}
          to new framework and make use of Monorepo technology.
        </Item>
        <Item>
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as JavaScript, TypeScript, Next.js,
          React.js, NX Monorepo, Tailwind CSS, and Strapi.
        </Item>
      </div>
    )
  }

  const Display11 = () => {
    return (
      <div className="w-full  sm:pl-6">
        <div className="text-xl font-medium text-white">
          FullStack Engineer Intern
        </div>
        <div className="mb-6 text-sm text-gray-400">
          Oct 2020 - Nov 2021, Singapore
        </div>
        <Item>
          Full-stack developing and maintaining{' '}
          <a
            href="https://play.google.com/store/apps/details?id=com.kii_1111"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-primary hover:text-opacity-80"
          >
            Kii mobile app
          </a>{' '}
          (Door access system) using frameworks React Native, PHP Laravel, and
          Flask with Rest API architecture, resulting in 20% increase of user
          usage.
        </Item>

        <Item>
          Led design and development of an accounting software{' '}
          <span
            onClick={goProject}
            className="cursor-pointer font-medium text-primary hover:text-opacity-80"
          >
            Acc
          </span>{' '}
          for Mac and Windows from scratch. Built in Electron using ReactJS
          framework and NeDB embedded database.
        </Item>

        <Item>
          One-man building a property IOS and Android app{' '}
          <span
            onClick={goProject}
            className="cursor-pointer font-medium text-primary hover:text-opacity-80"
          >
            Rentperty
          </span>{' '}
          for the company's client using React Native, ExpressJS and MySQL. Designed
          features for nearby places using Google Maps API, WebSocket for
          real time chat and OCBC PayNow Api.
        </Item>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-darkest px-6 md:px-12 xl:px-0">
      <div className="w-full max-w-lg md:max-w-2xl ">
        <Header />
        <div className="md:flex">
          <div className="h-full min-w-fit md:flex">
            <div className="relative hidden w-0.5 rounded bg-dark-darker md:block">
              <div
                className={classNames(
                  'absolute h-1/2 w-full rounded bg-primary duration-200',
                  activeTab == 'Mantheos' ? 'translate-y-0' : 'translate-y-full'
                )}
              />
            </div>

            <div className="flex w-full  md:block">
              <Button name="Mantheos" />
              <Button name="11.11 Technologies" />
            </div>

            <div className="relative block h-0.5 rounded bg-dark-darker md:hidden">
              <div
                className={classNames(
                  'absolute h-full w-1/2 rounded bg-primary duration-200',
                  activeTab == 'Mantheos' ? 'translate-x-0' : 'translate-x-full'
                )}
              />
            </div>
          </div>
          <div className="relative mt-6 md:mt-0">
            <div
              className={classNames(
                'absolute z-auto bg-dark-darkest duration-300',
                activeTab !== 'Mantheos'
                  ? ' invisile translate-y-5 opacity-0'
                  : ' visible translate-y-0 opacity-100'
              )}
            >
              <DisplayMantheos />
            </div>
            <div
              className={classNames(
                ' z-auto bg-dark-darkest duration-300',
                activeTab == 'Mantheos'
                  ? ' invisible translate-y-5 opacity-0'
                  : ' visible translate-y-0 opacity-100'
              )}
            >
              <Display11 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
