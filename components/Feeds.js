import {
  CheckIcon,
  ThumbUpIcon,
  UserIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  OfficeBuildingIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from '@heroicons/react/solid'

const timeline = [
  {
    id: 1,
    content: 'Start on',
    target: 'Web Development',
    date: '2018',
    datetime: '2020-09-20',
    icon: DesktopComputerIcon,
    iconBackground: 'bg-gradient-to-r from-cyan-500 to-sky-500',
  },
  {
    id: 2,
    content: 'Start on ',
    target: 'Mobile Development',
    date: '2019',
    datetime: '2020-09-22',
    icon: DeviceMobileIcon,
    iconBackground: 'bg-gradient-to-r from-cyan-500 to-sky-500',
  },
  {
    id: 3,
    content: 'Worked as a ',
    target: 'FullStack Developer',
    date: '2020',
    datetime: '2020-09-28',
    icon: OfficeBuildingIcon,
    iconBackground: 'bg-gradient-to-r from-cyan-500 to-sky-500',
  },
  {
    id: 4,
    content: 'Graduate with a',
    target: 'Computer Science Degree',
    date: '2021',
    datetime: '2020-09-30',
    icon: AcademicCapIcon,
    iconBackground: 'bg-gradient-to-r from-cyan-500 to-sky-500',
  },
  {
    id: 5,
    content: 'Worked as a',
    target: 'Software Engineer',
    date: '2022',
    datetime: '2020-10-04',
    icon: BriefcaseIcon,
    iconBackground: 'bg-gradient-to-r from-cyan-500 to-sky-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-500"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-dark-darkest'
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-400">
                      {event.content}{' '}
                      <a
                        href={event.href}
                        className="font-medium text-gray-200"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-400">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
