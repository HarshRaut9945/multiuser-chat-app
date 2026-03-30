import React from 'react'

const User = () => {
  return (
    <>
       <div className="flex items-center space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer rounded-lg mx-2">
        <div className="avatar online">
          <div className="w-12 rounded-full ring-2 ring-green-500">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" alt="avatar" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-white font-semibold">Harsh</h2>
          <p className="text-gray-400 text-sm truncate">harsh@gmail.com</p>
        </div>
        <span className="text-gray-500 text-xs">12:30</span>
      </div>
    </>
  )
}

export default User
