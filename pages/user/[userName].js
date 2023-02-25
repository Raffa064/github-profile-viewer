import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from './user.module.css'
import Layout from '@/components/layout'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ avatar_url, userName, email, bio, followers, html_url, public_repos }) {
  return (
    <main className={styles.main}>
      <Head>
        <title>User {userName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className={styles.w60} type="montain">
        <Layout className={styles.centeredContainer} type="montain" orientation="horizontal">
          <img className={styles.profilePicture} src={avatar_url} alt="profile picture"></img>
          <Layout type="none">
            <p><strong>{userName}</strong></p>
            <p>{email}</p>
            <p>{followers} followers</p>
            <p>{public_repos} public repos</p>
            <a className={styles.marginTop10px} href={html_url}>View on github</a>
          </Layout>
        </Layout>
        <Layout>{bio || "No bio available..."}</Layout>
      </Layout>
      <Link className={styles.goBackLink} href="/"><ion-icon name="arrow-back-outline"></ion-icon></Link>
    </main>
  )
}

export async function getServerSideProps(context) {
  const userName = context.query.userName
  const req = await fetch("https://api.github.com/users/" + userName)
  
  if (req.status != 200) {
    return {
      redirect: {
        destination: '/error/'+req.status,
        permanent: true
      }
    }
  }

  const data = await req.json()
  const { avatar_url, html_url, email, bio, followers, public_repos } = data
  return {
    props: {
      avatar_url,
      userName,
      email,
      bio,
      followers,
      html_url,
      public_repos
    }
  }
}