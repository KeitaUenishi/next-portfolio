import React from 'react'
import { Card } from 'components/ui-elements/Card'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const BlogContainer: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3 my-24 md:gap-12">
      {array.map((item) => {
        return (
          <div className="flex justify-center">
            <Card />
          </div>
        )
      })}
    </div>
  )
}
