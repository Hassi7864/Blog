import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Personal Blog</title>
        <meta name="description" content="Want To Know Me! Come and Read Then | School, College, University, Local, Mature, Travel, Life and much more..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src='/sc.js'  strategy='lazyOnload'>

      </Script>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Personal <a href="https://ud.me/hassanfaisal.nft" target="_blank">Blog</a>
        </h1>

        <p className={styles.description}>
          Let Me Tell You What{' '}
          <code className={styles.code}><a>Boring</a> / <a>Excitement</a> / <a>Challenges</a></code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>School Stories &rarr;</h2>
            <p>You! Yes you come close not that much just click on this card.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>College Stories &rarr;</h2>
            <p>AHHH! Toxic days, Depression, Cricket, Hopeless and 18plus.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>University Chapter &rarr;</h2>
            <p>Hey boy! you doing computer science degree? You know how to hack.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>What to-do Next?&rarr;</h2>
            <p>
              Haha! Welcome to the club.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{'  '}
          <p className={styles.titlef}>
         <a href="https://ud.me/hassanfaisal.nft" target="_blank">Hassan Faisal</a>
        </p>
        </a>
      </footer>
    </div>
  )
}
