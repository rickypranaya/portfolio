import React, { useRef } from 'react'
import classNames from 'classnames'
import useVisible from '../utils/useIsVisible'

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
      'Combining Zoom + Skribbl.io, allowing users to chat, video call and draw in real time. Implementing the use of WebRTC and WebSocket technology with Node.js backend.',
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
      "A property IOS and Android app Rentperty for the company's client using React Native, ExpressJS and MySQL. Designed features for nearby places using Google Maps API, WebSocket for real time chat and OCBC PayNow Api.",
    tech: ['React Native', 'Express.js', 'MySQL', 'WebSocket'],
    mobile: 'rentperty/rentperty.mp4',
  },
  {
    type: 'IOS and Android App',
    name: 'Bike Sharing App',
    description:
      'Leading a team of 5 on a Final Year Project to create a Bike Sharing mobile and web app using Agile Development.',
    tech: [
      'React Native',
      'Node.js',
      'Stripe',
      'Google Cloud Platform',
      'Twillio',
    ],
    mobile: 'sinbike/sinbike.mp4',
  },
]

const Header = () => {
  return (
    <div className="mb-12 flex items-center">
      <div className="text-xl sm:text-2xl">
        <span className="text-primary">03.</span>{' '}
        <span className="font-semibold text-white">Projects I've Built</span>
      </div>
      <div className="mx-5 hidden h-0 w-1/2 border-b border-dark-base md:block" />
    </div>
  )
}

const Section = ({ item, align }) => {
  return (
    <div
      className={classNames(
        'relative md:flex',
        align == 'left' ? 'justify-end' : 'justify-start'
      )}
    >
      <div className="block text-sm font-medium text-primary md:hidden">
        {item.type}
      </div>
      <div className="mb-8 block text-xl font-semibold text-white md:hidden">
        {item.name}
      </div>
      {item.preview && (
        <div
          className="h-[55vw] w-full rounded bg-dark-darker shadow md:h-[30vw] md:max-h-96 md:w-3/5"
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
            'md:mx-32',
            item.name == 'Property App' ? 'w-64 md:w-52' : 'w-60 md:w-48'
          )}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${item.mobile}"
        />,
      `,
            }}
          ></div>
        </div>
      )}

      <div
        className={classNames(
          'right-0 top-1/2  flex w-full flex-col md:absolute md:-translate-y-1/2 ',
          align == 'left' ? 'md:items-start' : 'md:items-end'
        )}
      >
        <div className="hidden text-sm font-medium text-primary md:block">
          {item.type}
        </div>
        <div className="mb-8 hidden text-2xl font-semibold text-white md:block">
          {item.name}
        </div>
        <div
          className={classNames(
            'rounded py-4  text-sm text-gray-300 backdrop-blur md:w-[60%] md:bg-dark-darker md:bg-opacity-70 md:px-8 md:shadow-xl lg:w-[43%]',
            align == 'left' ? 'md:text-left' : 'md:text-right'
          )}
        >
          {item.description}
        </div>
        <div className="flex flex-wrap space-x-4 text-sm text-gray-400 md:my-4">
          {item.tech.map((i) => (
            <span className="py-2" key={i}>
              {i}
            </span>
          ))}
        </div>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 w-fit cursor-pointer rounded border border-primary px-4 py-1 text-sm text-primary duration-200 hover:bg-primary hover:bg-opacity-10 md:mt-0"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  )
}

function Projects(props) {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const ref1Visible = useVisible(ref1)
  const ref2Visible = useVisible(ref2)
  const ref3Visible = useVisible(ref3)
  const ref4Visible = useVisible(ref4)
  const ref5Visible = useVisible(ref5)
  const ref6Visible = useVisible(ref6)

  return (
    <div className="flex h-full items-center justify-center bg-dark-darkest py-32  px-6 md:px-12 xl:px-0">
      <div className="max-w-5xl md:w-[80vw]">
        <Header />
        <div className="space-y-32">
          {projects.map((item, index) => {
            let align = index % 2 == 0 ? 'right' : 'left'
            let ref
            let visible
            switch (index) {
              case 0:
                ref = ref1
                visible = ref1Visible
                break
              case 1:
                ref = ref2
                visible = ref2Visible
                break
              case 2:
                ref = ref3
                visible = ref3Visible
                break
              case 3:
                ref = ref4
                visible = ref4Visible
                break
              case 4:
                ref = ref5
                visible = ref5Visible
                break
              case 5:
                ref = ref6
                visible = ref6Visible
                break
              default:
                break
            }
            return (
              <div
                key={index}
                ref={ref}
                className={classNames(
                  'delay-300 duration-1000',
                  visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                )}
              >
                <Section item={item} align={align} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
