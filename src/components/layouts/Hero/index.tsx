import React from 'react'

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("/images/Layout/Hero/header.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Uenishi.Web</h1>
          <p className="mb-5 text-white">
            大阪に生息しているプログラマー。
            <br />
            2021年5月から大阪のITベンチャーで勤務し、現在2年目。
            <br />
            主にReactやTypeScriptでWeb開発を行なっています。
          </p>
        </div>
      </div>
    </div>
  )
}
