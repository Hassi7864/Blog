import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import social from '../social/Social.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
// import your icons
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
library.add(
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram
)
const MainHead = () => {
  return (
    <div>
    <h1 className={styles.title}>
     Personal <a href="https://ud.me/hassanfaisal.nft" target="_blank">Blog</a>
    </h1>
    <div className={social.social}>
    <FontAwesomeIcon className={social.twitter} icon={faTwitter}  />
    <FontAwesomeIcon className={social.instagram} icon={faInstagram} />
    <FontAwesomeIcon className={social.github} icon={faGithub} />
    <FontAwesomeIcon className={social.linkedin} icon={faLinkedin}/>
    </div>
    <p className={styles.description}>
      Let Me Tell You What{' '}
     <button className={styles.btn}><Link href='/boring'>Boring</Link> | <Link href='/excitement'>Excitement</Link>  | <Link href='/challenges'>Challenges</Link></button>
    </p>
    </div>
  )
}

export default MainHead