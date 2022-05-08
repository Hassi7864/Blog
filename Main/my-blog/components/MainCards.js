import React from 'react'
import styles from '../styles/Home.module.css'
const MainCards = () => {
  return (
    <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>School Stories &rarr;</h2>
            <p>You! Yes you come close not that much just click on this card.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>College Stories &rarr;</h2>
            <p>AHHH! Toxic days, Depression, Cricket, Hopeless and 18plus.</p>
          </a>
          <a
            href=""
            className={styles.card}
          >
            <h2>University Chapter &rarr;</h2>
            <p>Hey boy! you doing computer science degree? You know how to hack.</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>What to-do Next?&rarr;</h2>
            <p>
              Haha! Welcome to the club.
            </p>
          </a>
        </div>

  )
}

export default MainCards