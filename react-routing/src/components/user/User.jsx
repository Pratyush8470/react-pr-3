import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div> 
       <h1 className='text-[52px] font-bold py-14'>User : {id}</h1> 
    </div>
  )
}

export default User