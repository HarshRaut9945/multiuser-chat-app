import React from 'react'
import ChatUser from './ChatUser'
import Message from './Message'

const Right = () => {
  return (
    <div className='w-[70%] border bg-slate-900'>
      <ChatUser/>
      <Message/>
    </div>
  )
}

export default Right
