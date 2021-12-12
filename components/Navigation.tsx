import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from 'next/link'

const Navigation = () => {
  const {data: session } = useSession();

  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-1 px-2 mx-2">
        <Link href="/" passHref>
          <a className="text-lg font-bold">natwa</a>
        </Link>
      </div>
      <div className="hidden px-2 mx-2 navbar-center lg:flex">
          <div className="flex items-stretch">
            <a className="btn btn-ghost btn-sm rounded-btn">
              Home
            </a> 
            <a className="btn btn-ghost btn-sm rounded-btn">
              Follows
            </a> 
            <a className="btn btn-ghost btn-sm rounded-btn">
              Settings
            </a> 
          </div>
      </div> 
      <div className="navbar-end flex-none pr-4">
        {session ? (
          <>
            {/* Signed in as {session.user?.email} <br /> */}
            {/* <button onClick={() => signOut()}>Sign out</button> */}
            <div className="avatar">
              <div className="rounded-full">
                <Image src={session.user?.image ?? ""} alt="signed in" height={48} width={48} />
              </div>
            </div>
          </>
        ) : (
          <>
            <button className="btn btn-info" onClick={() => signIn()}>
              Sign in with Twitter
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navigation