import React from 'react'

type HeaderItem = {
  title: string
  url: string
}

type Props = {
  headerItems: HeaderItem[]
}

export const Header: React.FC<Props> = ({ headerItems }) => {
  return (
    <div className="navbar sticky top-0 z-30 bg-base-100">
      <div className="max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        {headerItems.map((item, idx) => {
          return (
            <a key={idx} className="btn btn-ghost normal-case text-xl" href={item.url}>
              {item.title}
            </a>
          )
        })}
      </div>
    </div>
  )
}
