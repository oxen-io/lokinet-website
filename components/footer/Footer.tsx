import styles from './Footer.module.css'
import Logo from '../logo/Logo'

import TelegramButton from '../buttons/image-button/social-buttons/TelegramButton'
import React from 'react'
import TwitterButton from '../buttons/image-button/social-buttons/TwitterButton'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Logo />
      <TelegramButton />
      <TwitterButton />
    </footer>
  )
}
