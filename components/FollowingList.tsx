import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";



interface Following {
  id: string
  name: string
  username: string
  url: string
  profile_image_url: string
}

const FollowingList = () => {
  const [followings, setFollowings] = useState([])

  const getFollowings = async () => {
    const results = await fetch('/api/twitter/followings', {
      method: 'GET',
    }).then(res => res.json());

    console.log("Results: ", results.data);
    setFollowings(results.data);
  }

  useEffect(() => {
    getFollowings()
  }, [])

  return (
    <div className="p-8">
      <h3 className="text-3xl">Followers</h3>
      <div className="overflow-x-auto px-4 py-2">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th> 
              <th>URL</th> 
              <th>Details</th>
              <th>Unfollow</th>
            </tr>
          </thead> 
          <tbody>
            {followings && followings.map((following: Following) => {
              return (
                <tr key={following.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <Image 
                            src={following.profile_image_url || "http://assets.example.com"} 
                            alt="Profile Image"
                            width={45}
                            height={45}
                          />
                        </div>
                      </div> 
                      <div>
                        <div className="font-bold">
                              {following.name}
                            </div> 
                        <div className="text-sm opacity-50">
                            {`@${following.username}`}
                            </div>
                      </div>
                    </div>
                  </td> 
                  <td>
                    <a href={following.url}>
                      <FaTwitter />
                    </a>
                  </td> 
                  <td>
                    <button className="btn btn-ghost">Details</button>
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
export default FollowingList;