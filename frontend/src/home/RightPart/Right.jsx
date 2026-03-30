import React from 'react'
import ChatUser from './ChatUser'
import Message from './Message'
import TypeSend from './TypeSend'

const Right = () => {
  return (
    <div className='w-[70%] border bg-slate-900'>
      <ChatUser/>
      <Message/>
      <TypeSend/>
    </div>
  )
}

export default Right
