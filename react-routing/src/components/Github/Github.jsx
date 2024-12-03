import React, { useEffect, useState } from 'react'

function Github () {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/Pratyush8470')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, [])
  return (
    <>
      <div className='wrap py-10 my-5 bg-slate-800'>
        <div className='flex justify-center py-10'>
          {' '}
          <img
            src={data.avatar_url}
            className='rounded-full border-2 border-white'
            alt=''
          />{' '}
        </div>
        <div className='font-bold text-[50px] text-white'> {data.login}</div>
        <div className='flex justify-center'>
          <div className='font-thin text-[16px] text-white me-2'>
            {' '}
            followers : {data.followers}
          </div>
          <div className='font-thin text-[16px] text-white'>
            {' '}
            following : {data.following}
          </div>
        </div>
      </div>
    </>
  )
}

export default Github
