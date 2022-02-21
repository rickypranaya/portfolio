import React from 'react'
import classNames from 'classnames'

const projects = [
  {
    type: 'Web App',
    name: 'NFT Compass',
    description:
      'A modern and features rich NFT analytics tool that help both beginners and experts in finding their next NFT. This project focused heavily on frontend with responsiveness and best UX practice.',
    tech: ['TypeScript', 'Next.js', 'React.js', 'Tailwind CSS', 'NX Monorepo'],
    url: 'https://nftcompass.vercel.app/',
    preview: 'nftcompass/preview.gif',
  },
  {
    type: 'Web App',
    name: 'Limedraw.io',
    description:
      'Combining Zoom + Skribbl.io allowing users to chat, video call and draw in real time. Implementing the use of WebRTC and WebSocket technology with Node.js backend.',
    tech: ['React.js', 'Node.js', 'WebRTC', 'WebSocket'],
    url: 'https://limedraw.netlify.app/',
    preview: 'limedraw/preview.gif',
  },
  {
    type: 'Web App',
    name: 'Mantheos Web App',
    description:
      "This project is for Mantheos' clients to manage their account, API usage, billing and payment and also for internal use.",
    tech: ['TypeScript', 'Next.js', 'React.js', 'Tailwind CSS', 'NX Monorepo'],
    preview: 'mantheos/preview.gif',
  },
  {
    type: 'Desktop App',
    name: 'Accounting Software',
    description:
      'An accounting desktop app for Mac and Windows. Features to create invoice, bill, financial statement and others needed for bookkeeping.',
    tech: ['Electron.js', 'React.js', 'NeDB'],
    preview: 'acc/preview.gif',
  },
  {
    type: 'IOS and Android App',
    name: 'Property App',
    description:
      "A property IOS and Android app Rentperty for company's client using React Native, ExpressJS and MySQL. Designed features for nearby places using Google Maps API, WebSocket for realtime chat and OCBC PayNow Api.",
    tech: ['React Native', 'Express.js', 'MySQL', 'WebSocket'],
    mobile: 'rentperty/rentperty.mov',
  },
  {
    type: 'IOS and Android App',
    name: 'Bike Sharing App',
    description:
      "Leading a team of 5 on a Final Year Project to create a Bike Sharing mobile and web app using Agile Development.",
    tech: ['React Native', 'Node.js', 'Stripe', 'Goocle Cloud Platform', 'Twillio'],
    mobile: 'sinbike/sinbike.mp4',
  },
]

const Header = () => {
  return (
    <div className="mb-12 flex items-center">
      <div className="text-2xl">
        <span className="text-primary">03.</span>{' '}
        <span className="font-semibold text-white">Projects I've Built</span>
      </div>
      <div className="mx-5 h-0 w-1/2 border-b border-dark-base" />
    </div>
  )
}

const Section = ({ item, align }) => {
  return (
    <div
      className={classNames(
        'relative flex',
        align == 'left' ? 'justify-end' : 'justify-start'
      )}
    >
      {item.preview && (
        <div
          className="h-[30vw] max-h-96 w-3/5 rounded bg-dark-darker shadow"
          style={{
            backgroundImage: `url('${item.preview}')`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}

      {item.mobile && (
        <div
          className={classNames(
            'mx-32',
            item.name == 'Property App' ? 'w-52' : 'w-48'
          )}
        >
          <video className="VideoTag" autoPlay loop muted>
            <source src={item.mobile} type="video/mp4" />
          </video>
        </div>
      )}

      <div
        className={classNames(
          'absolute right-0 top-1/2 flex w-full -translate-y-1/2 flex-col ',
          align == 'left' ? 'items-start' : 'items-end'
        )}
      >
        <div className="text-sm font-medium text-primary">{item.type}</div>
        <div className="mb-8 text-2xl font-semibold text-white">
          {item.name}
        </div>
        <div
          className={classNames(
            'w-[43%] rounded  bg-dark-darker bg-opacity-80 px-8 py-4 text-sm text-gray-300 shadow-xl backdrop-blur',
            align == 'left' ? 'text-left' : 'text-right'
          )}
        >
          {item.description}
        </div>
        <div className="my-6 flex space-x-5 text-sm text-gray-400">
          {item.tech.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer rounded border border-primary px-4 py-1 text-sm text-primary duration-200 hover:bg-primary hover:bg-opacity-10"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  )
}

function Projects(props) {
  return (
    <div className="flex h-full py-32 items-center justify-center bg-dark-darkest">
      <div className="w-[80vw] max-w-5xl">
        <Header />
        <div className="space-y-32">
          {projects.map((item, index) => {
            let align = index % 2 == 0 ? 'right' : 'left'
            return <Section item={item} key={index} align={align} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
