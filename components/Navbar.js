import React, { useEffect, useState } from 'react'
import {
  MenuIcon,
  XIcon,
  UserIcon,
  BriefcaseIcon,
  FolderOpenIcon,
  MailIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'

const Logo = () => {
  return <div className="text-lg font-medium text-white">Ricky Pranaya</div>
}

function Navbar(props) {
  const { goProject, goAbout, goExp, goContact } = props
  const [open, setOpen] = useState(false)

  const Button = ({ item }) => {
    return (
      <div
        onClick={() => {
          setOpen(false)
          item.go()
        }}
        className="group flex cursor-pointer items-center py-5 px-6 text-lg md:py-3 md:px-0 md:text-sm"
      >
        {/* <div className="text-primary">{item.id}.</div> */}
        <item.icon className="h-5 w-5 text-primary" />
        <div className="ml-2 text-gray-300 duration-200 group-hover:text-primary">
          {item.label}
        </div>
      </div>
    )
  }

  const navigation = [
    { id: '01', url: '#', label: 'About', go: goAbout, icon: UserIcon },
    { id: '02', url: '#', label: 'Experience', go: goExp, icon: BriefcaseIcon },
    {
      id: '03',
      url: '#',
      label: 'Projects',
      go: goProject,
      icon: FolderOpenIcon,
    },
    { id: '04', url: '#', label: 'Contact', go: goContact, icon: MailIcon },
  ]

  return (
    <div className="navbar fixed top-0 z-50  w-full  ">
      <div className="flex w-full  items-center justify-between bg-dark-darkest bg-opacity-80 py-4 pl-6  pr-4 backdrop-blur md:px-10">
        <Logo />
        <div className="flex items-center space-x-6">
          <div className="hidden space-x-6 md:flex">
            {navigation.map((item) => (
              <Button key={item.id} item={item} />
            ))}
          </div>
          <a
            href={'resume.pdf'}
            target="_blank"
            className="hidden cursor-pointer rounded border-2 border-primary px-3 py-2 text-sm font-medium text-primary duration-200 hover:bg-primary hover:bg-opacity-10 md:block"
          >
            Resume
          </a>
        </div>

        <div
          onClick={() => {
            setOpen((open) => !open)
          }}
          className="relative block cursor-pointer rounded p-1 duration-200 hover:bg-dark-darker md:hidden"
        >
          <MenuIcon
            className={classNames(
              'h-7 w-7 text-primary duration-200',
              !open
                ? 'block rotate-0 opacity-100'
                : 'invisible -rotate-45 opacity-0'
            )}
          />
          <XIcon
            className={classNames(
              'absolute top-1/2 h-7 w-7 -translate-y-1/2 text-primary duration-200',
              !open
                ? 'invisible rotate-45 opacity-0'
                : 'block rotate-0 opacity-100'
            )}
          />
        </div>
      </div>

      <div
        className={classNames(
          'w-full  bg-dark-darkest bg-opacity-80  pb-5 backdrop-blur duration-200',
          !open
            ? 'invisible  h-0 translate-y-12 opacity-0'
            : 'block h-full  translate-y-0 opacity-100 md:hidden'
        )}
      >
        {navigation.map((item) => (
          <Button key={item.id} item={item} />
        ))}
        <a
          href={'resume.pdf'}
          target="_blank"
          className="my-5 mx-6 block w-fit cursor-pointer rounded border-2 border-primary px-8 py-2 text-lg font-medium text-primary duration-200 hover:bg-primary hover:bg-opacity-10 md:hidden"
        >
          Resume
        </a>
      </div>
      {open && (
        <div
          onClick={() => {
            setOpen(false)
          }}
          className="flex h-screen bg-transparent"
        />
      )}
    </div>
  )
}

export default Navbar
