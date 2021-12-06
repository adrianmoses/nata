import { useEffect, useState } from "react";


interface Follower {
  id: string
  name: string
  username: string
}

const FollowerList = () => {
  const [followers, setFollowers] = useState([])

  const getFollowers = async () => {
    const results = await fetch('/api/twitter/followers', {
      method: 'GET',
    }).then(res => res.json());

    console.log(results.data);
    setFollowers(results.data);
  }

  useEffect(() => {
    getFollowers()
  }, [])

  return (
    <div>
      <ul>
        {followers.map((follower: Follower) => {
          return (
            <li key={follower.id}>{follower.username}</li>
          )
        })}
      </ul>
    </div>
  )
}
export default FollowerList;