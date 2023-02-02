import React from 'react'
import _ from 'lodash'

type Props = {
  children: React.ReactNode
  textType?: 'primary' | 'secondary' | 'danger'
}

type Map = {
  key: string
  class: string[]
}

const TextSetting: Map[] = [
  {
    key: 'primary',
      class: [
        'text-white',
        'bg-blue-500',
        'hover:bg-indigo-700',
        'focus:ring-indigo-500',
        'border-transparent',
        'primary-button',
      ],
  }
]

export const Text: React.FC<Props> = ({
  children,
  textType = 'primary',
}) => {
  const _color = _
    .head(TextSetting
      .filter((map: Map) => map.key === textType)
      .map((map: Map) => map.class
    )
  )

  if (!_color) {
    console.error('color is not defined.')
    return null
  }

  const className = [
    ..._color,
  ]
  return (
    <div className={`${className} font-suns text-base`}>
      {children}
    </div>
  )
}
