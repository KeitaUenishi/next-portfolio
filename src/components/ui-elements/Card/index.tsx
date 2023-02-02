import React from 'react'

export const Card = () => {
  return (
    <div className="card w-96 p-6 bg-primary text-primary-content">
      <div className="card-body p-0 gap-8">
        <p>2022/05/05</p>
        <div className="flex items-start">
          <h2 className="card-title text-2xl">俺のタイトル俺のタイトル俺のタイトル</h2>
        </div>
        <div className="card-actions justify-start"></div>
      </div>
    </div>
  )
}
