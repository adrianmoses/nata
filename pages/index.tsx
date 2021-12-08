import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSession } from "next-auth/react";
import FollowerList from '../components/FollowerList';
import Navigation from '../components/Navigation';

const Home: NextPage = () => {
  const {data: session } = useSession();

  return (
    <div >
      <Head>
        <title>natwa</title>
        <meta name="description" content="not another twitter app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>
      <main className={styles.container}>
        {!session && (
          <div>
            <div className={styles.title}>
              <h1>natwa (not another twitter app)</h1>
              <br/>
              <span className="description">simple twitter account managment</span>
            </div>
          </div>
        )}

        {session && (
          <div>
            <FollowerList />
          </div>
        )}

      </main>
    </div>
  );
}

export default Home
