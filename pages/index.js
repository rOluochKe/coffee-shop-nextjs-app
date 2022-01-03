import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '../components/banner'
import Card from '../components/card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Shop App</title>
        <link rel='icon' href='/favicon.ico' />

        <meta
          name='description'
          content='allows you to discover coffee stores'
        ></meta>
      </Head>

      <main className={styles.main}>
        <Banner buttonText='View Stores Nearby' />

        <div className={styles.heroImage}>
          <Image
            src='/static/hero-image.png'
            width={700}
            height={400}
            alt='hero image'
          />
        </div>

        <div className={styles.sectionWrapper}>
          <h2 className={styles.heading2}>Stores near me</h2>
          <div className={styles.cardLayout}>
            <Card
              name='dark horse coffee'
              imgUrl='/static/hero-image.png'
              href='/coffee-store/dark-horse-coffee'
              className={styles.card}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
