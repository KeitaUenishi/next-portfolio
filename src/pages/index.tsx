import Head from 'next/head'
import styles from 'styles/Home.module.css'

import { Button } from 'components/atoms/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Uenishi Web Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <div>
            <Button
              color='primary'
              fullWidth={true}
              disabled={false}
            >
              Primary
            </Button>
          </div>
          <div>
            <Button
              color='secondary'
              fullWidth={true}
              disabled={false}
            >
              Secondary
            </Button>
          </div>
          <div>
            <Button
              color='danger'
              fullWidth={true}
              disabled={false}
            >
              Secondary
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
