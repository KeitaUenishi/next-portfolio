import React from 'react'

export const Hero: React.FC = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("/images/Layout/Hero/header.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Uenishi.Web</h1>
          <p className="mb-5 text-white">大阪に生息しているプログラマーのブログ</p>
        </div>
      </div>
    </div>
  )
}
