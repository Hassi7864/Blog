import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainCards from '../components/MainCards'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Personal Blog</title>
        <meta name="description" content="Want To Know Me! Come and Read Then | School, College, University, Local, Mature, Travel, Life and much more..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>  
        
        <MainCards/>
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
