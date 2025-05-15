import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch('https://api.github.com/users/BHARATH-16-04-2001')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}

      <img src={data.avatar_url} alt="Profile pic" width={300} />

    </div>
  );
}

export default Github;


export const githubInfoLoader = async () =>{
 const response = await fetch('https://api.github.com/users/BHARATH-16-04-2001')
 return response.json()
}
