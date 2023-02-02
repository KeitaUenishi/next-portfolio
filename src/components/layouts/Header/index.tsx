import React from 'react'
import Link from 'next/link'

type HeaderItem = {
  title: string
  url: string
}

type Props = {
  headerItems: HeaderItem[]
}

// TODO: sticky headerにする
export const Header: React.FC<Props> = ({ headerItems }) => {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        {headerItems.map((item, idx) => {
          return (
            <Link
              key={idx}
              href={item.url}
              className="mr-5 hover:text-gray-300 normal-case text-xl"
            >
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
