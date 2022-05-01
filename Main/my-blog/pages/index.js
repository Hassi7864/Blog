import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Personal Blog</title>
        <meta name="description" content="Want To Know Me! Come and Read Then | School, College, University, Local, Mature, Travel, Life and much more..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>  
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
       
          Powered by{'  '}
          <h4 className={styles.titlef}>
         <a href="https://ud.me/hassanfaisal.nft" target="_blank">Hassan Faisal</a>
        </h4>
        
      </footer>
    </div>
  )
}
