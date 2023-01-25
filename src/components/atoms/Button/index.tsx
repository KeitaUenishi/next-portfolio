import React from 'react'
import _ from 'lodash'

type Map = {
  key: string
  class: string[]
}

const ColorSetting: Map[] = [
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
  },
  {
    key: 'secondary',
    class: [
      'text-white',
      'bg-green-500',
      'hover:bg-indigo-700',
      'focus:ring-indigo-500',
      'border-transparent',
      'primary-button',
    ],
  },
  {
    key: 'danger',
    class: [
      'text-white',
      'bg-red-500',
      'hover:bg-indigo-700',
      'focus:ring-indigo-500',
      'border-transparent',
      'primary-button',
    ],
  },
]

const SizeSetting: Map[] = [
  { key: 'small', class: ['py-2', 'px-4', 'text-sm'] },
]

type Props = {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'danger'
  size?: 'large' | 'medium' | 'small'
  fullWidth?: boolean
  disabled?: boolean
  classes?: string[]
  onClick?: (event: any) => void
}

export const Button: React.FC<Props> = ({
  children,
  color = 'default',
  size = 'small',
  fullWidth = false,
  disabled = false,
  classes = [],
  onClick,
}) => {
  const _color = _.head(
    ColorSetting.filter((map: Map) => map.key === color).map(
      (map) => map.class
    )
  )

  const _size = _.head(
    SizeSetting.filter((map: Map) => map.key === size).map(
      (map) => map.class
    )
  )

  if (!_color) {
    console.error('color is not defined.')
    return null
  }
  
  if (!_size) {
    console.error('size is not defined.')
    return null
  }

  const className = [
    'inline-flex',
    'justify-center',
    'rounded-md',
    'border',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    ..._color, // 指定されたカラーのクラス群をマージ
    ..._size,
    ...classes, // 指定されたカスタムクラスをマージ
  ].join(' ')

  const handleSubmit = (event: any) => {
    if (onClick && !disabled) {
      onClick(event)
    }
  }

  return (
    <button
      className={`${className} ${fullWidth ? 'w-full' : ''} 
      ${ disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleSubmit}
    >
      {children}
    </button>
  )
}
