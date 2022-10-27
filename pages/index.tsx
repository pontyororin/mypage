import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>きょーりゅー大図鑑</title>
        <meta name="description" content="きょーりゅーたちの情報をまとめています!(随時更新)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      🦖🦕きょーりゅーちゃんはいっぱいいるよ!🦖🦕

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
