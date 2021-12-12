import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession, signIn } from "next-auth/react";
import Navigation from '../components/Navigation';
import FollowingList from '../components/FollowingList';

const Home: NextPage = () => {
  const {data: session } = useSession();

  return (
    <div>
      <Head>
        <title>natwa</title>
        <meta name="description" content="not another twitter app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main>
        {!session && (
          <div className="hero min-h-screen bg-base-200">
            <div className="text-center hero-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">natwa</h1>
                <p className="mb-5">simple twitter account managment</p>
                <button className="btn btn-info" onClick={() => signIn()}>
                  Sign In With Twitter
                </button>
              </div>
            </div>
          </div>
        )}

        {session && (
          <div>
            <FollowingList />
          </div>
        )}
      </main>
    </div>
  );
}

export default Home
