import React from 'react'
import { IoSend } from "react-icons/io5";

const TypeSend = () => {
    return (
        <div className='flex items-center space-x-3 h-[8vh] bg-gray-800 px-4'>
            <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg outline-none px-4 py-2 focus:border-blue-500 transition"
            />
            <button className='text-gray-400 hover:text-blue-500 transition p-2 rounded-lg hover:bg-gray-700'>
                <IoSend className='text-2xl'/>
            </button>
        </div>
    )
}

export default TypeSend
