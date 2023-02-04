import React from 'react'

import { Layout } from 'components/layouts/Layout'

export default function Profile() {
  return (
    <Layout>
      <div className="flex items-center space-x-4 mt-16">
        <div>
          <img
            src="/images/Profile/profile.jpeg"
            alt="profile"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold leading-6 text-gray-300">うえにし</h2>
          <p className="text-sm tracking-wide">Keita Uenishi</p>
        </div>
      </div>
      <div className="mt-8 border-t max-w-3xl border-gray-700">
        <dl className="sm:divide-y sm:divide-gray-600">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="mb-2 text-sm font-bold text-gray-300 sm:mb-0">Job</dt>
            <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
              <p className="text-lg text-gray-200 sm:text-sm">Web Engineer</p>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="mb-2 text-sm font-bold text-gray-300 sm:mb-0">About</dt>
            <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
              <p className="text-lg text-gray-200 sm:text-sm">
                1992年9月5日生まれ。
                27歳までバンドでギターを弾いていました。職歴なしの状態から28歳でエンジニアとして就職。
                大阪在住。
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </Layout>
  )
}
