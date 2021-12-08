import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navigation = () => {
  const {data: session } = useSession();

  console.log(session);
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">natwa</span>
      </div>
      <div className="flex-none pr-4">
        {session ? (
          <>
            {/* Signed in as {session.user?.email} <br /> */}
            {/* <button onClick={() => signOut()}>Sign out</button> */}
            <div className="avatar">
              <div className="rounded-full">
                <Image src={session.user?.image ?? ""} alt="signed in" height={24} width={24} />
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