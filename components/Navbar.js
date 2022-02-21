import React, { useEffect, useState } from 'react'

const Logo = () => {
  return <div className="text-lg font-medium text-white">Ricky Pranaya</div>
}

const Button = ({ item }) => {
  return (
    <div onClick={item.go} className="group flex cursor-pointer py-3 text-sm">
      <div className="text-primary">{item.id}.</div>
      <div className="ml-2 text-gray-300 duration-200 group-hover:text-primary">
        {item.label}
      </div>
    </div>
  )
}

function Navbar(props) {
  const { goProject, goAbout, goExp, goContact } = props
  const navigation = [
    { id: '01', url: '#', label: 'About', go: goAbout },
    { id: '02', url: '#', label: 'Experience', go: goExp },
    { id: '03', url: '#', label: 'Projects', go: goProject },
    { id: '04', url: '#', label: 'Contact', go: goContact },
  ]

  return (
    <div className="navbar fixed top-0 z-50 flex  w-full items-center justify-between bg-dark-darkest bg-opacity-80 px-10 py-4 backdrop-blur">
      <Logo />
      <div className="flex items-center space-x-6">
        <div className="flex space-x-6">
          {navigation.map((item) => (
            <Button key={item.id} item={item} />
          ))}
        </div>
        <a
          href={'resume.pdf'}
          target="_blank"
          className="cursor-pointer rounded border-2 border-primary px-3 py-2 text-sm font-medium text-primary duration-200 hover:bg-primary hover:bg-opacity-10"
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default Navbar
