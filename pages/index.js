import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '../components/banner'
import Card from '../components/card'

import coffeeStoresData from '../data/coffee-stores.json'

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  }
}

export default function Home(props) {
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
          {props.coffeeStores.length > 0 && (
            <>
              <h2 className={styles.heading2}>Stores near me</h2>
              <div className={styles.cardLayout}>
                {props.coffeeStores.map((coffeeStore) => {
                  return (
                    <Card
                      key={coffeeStore.id}
                      name={coffeeStore.name}
                      imgUrl={coffeeStore.imgUrl}
                      href={`/coffee-store/${coffeeStore.id}`}
                      className={styles.card}
                    />
                  )
                })}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
