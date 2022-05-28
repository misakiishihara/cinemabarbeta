import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Mainlayout from '../components/Mainlayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Mainlayout>
      <main className={styles.main}>
        <a>Tell Me Your Mood</a>
        <div className={styles.button}>
          <button><Link href="Happy"><a>Happy</a></Link></button>
          <button><Link href="Sad"><a>Sad</a></Link></button>
        </div>
      </main>
    </Mainlayout>
  )
}
