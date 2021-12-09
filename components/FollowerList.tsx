import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";



interface Follower {
  id: string
  name: string
  username: string
  url: string
  profile_image_url: string
}

const FollowerList = () => {
  const [followers, setFollowers] = useState([])

  const getFollowers = async () => {
    const results = await fetch('/api/twitter/followers', {
      method: 'GET',
    }).then(res => res.json());

    console.log("Results: ", results.data);
    setFollowers(results.data);
  }

  useEffect(() => {
    getFollowers()
  }, [])

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th> 
              <th>URL</th> 
              <th>Unfollow</th>
            </tr>
          </thead> 
          <tbody>
            {followers && followers.map((follower: Follower) => {
              return (
                <tr key={follower.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <Image 
                            src={follower.profile_image_url || "http://assets.example.com"} 
                            alt="Profile Image"
                            width={25}
                            height={25}
                          />
                        </div>
                      </div> 
                      <div>
                        <div className="font-bold">
                              {follower.name}
                            </div> 
                        <div className="text-sm opacity-50">
                            {`@${follower.username}`}
                            </div>
                      </div>
                    </div>
                  </td> 
                  <td>
                    <a href={follower.url}>
                      <FaTwitter />
                    </a>
                  </td> 
                  <td>
                    <button className="btn btn-error">Unfollow</button>
                  </td> 
                </tr>
              )
            })}
          </tbody> 
        </table>
      </div>
    </div>
  )
}
export default FollowerList;