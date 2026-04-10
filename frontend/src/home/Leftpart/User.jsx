import React from 'react'
import useConversation from '../../zustand/useConversation.js';

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === user._id;

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex items-center space-x-4 px-8 py-3 cursor-pointer rounded-lg mx-2">
        
        <div className="avatar online">
          <div className="w-12 rounded-full ring-2 ring-green-500">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-white font-semibold">{user.fullname}</h2>
          <p className="text-gray-400 text-sm truncate">{user.email}</p>
        </div>

        <span className="text-gray-500 text-xs">12:30</span>
      </div>
    </div>
  )
}

export default User;