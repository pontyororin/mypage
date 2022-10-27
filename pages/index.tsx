import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>きょーりゅー大図鑑</title>
        <meta name="description" content="きょーりゅーたちの情報を調べてまとめています!(随時更新)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1>🦖🦕きょーりゅーちゃんはいっぱいいるよ!🦖🦕</h1>
      <h2>〜ティラノサウルス〜</h2>
      ティラノサウルス(学名=Tyrannosaurus)は、中生代白亜紀に生息していた大型の肉食恐竜です。
      学名の「Tyrannosaurus」は、ギリシャ語で「王」という意味を持っています。
      ティラノサウルスは、白亜紀に生きていた恐竜の中で一番知られており、ほとんどの人が知っています。
      ティラノサウルスの歯やあごは、他の恐竜の骨を噛み砕いてしまうほど強力でした。
      そんな白亜紀のハンター、ティラノサウルスは、五感が発達していたと言われています。その強い五感で餌を探して狩って食べていたそうです。
      最近、ティラノサウルスに羽毛が生えていたといわれています。
      しかし、実は赤ちゃんにしか羽毛は生えていなかったとも言われています。
      ティラノサウルスは全13Mもあったとされており、とても大きかったようです。

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
