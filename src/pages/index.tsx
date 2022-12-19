import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import Router from 'next/router'

export default function Home() {

  // 認証後のイベントハンドラ
  const handleSignIn = async () => {
    alert("Push II Button");

    // ページ遷移
    const redirectTo = '/newNote'
    await Router.push(redirectTo)
  }

  return (
    <div>
      {/* TODO: 後でHeadタグの中身を変更する*/}
      {/* <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}

      <main className={styles.main}>
        <h1 className="text-red-500">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <br />
        <Button onClick={handleSignIn}>Login with Internet Identity</Button>
      </main>

      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  )
}