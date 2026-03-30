import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/RightPart/Right'

const App = () => {
  return (
    <div className='flex h-screen text-gray-300'>
      <Left/>
      <Right/>
    </div>
  )
}

export default App
