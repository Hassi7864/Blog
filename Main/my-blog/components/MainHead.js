import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import social from '../styles/Social.module.css'
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
     Personal <a href="/">Blog</a>
    </h1>
    <div className={social.social}>
    <a href='https://twitter.com/nft_sahab' target="_blank"><FontAwesomeIcon className={social.twitter} icon={faTwitter}/></a>
   <a href='https://www.instagram.com/hassan_faisal_sheikh' target="_blank"> <FontAwesomeIcon className={social.instagram} icon={faInstagram} /></a>
    <a href='https://github.com/Hassi7864' target="_blank"><FontAwesomeIcon className={social.github} icon={faGithub} /></a>
    <a href='https://www.linkedin.com/in/hassan-faisal-shiekh/' target="_blank"><FontAwesomeIcon className={social.linkedin} icon={faLinkedin}/></a>
    </div>
    <p className={styles.description}>
      Let Me Tell You What{' '}
     <button className={styles.btn}><Link href='/boring/blog'>Boring</Link> | <Link href='/excitement/blog'>Excitement</Link>  | <Link href='/challenges/blog'>Challenges</Link></button>
    </p>
    </div>
  )
}

export default MainHead