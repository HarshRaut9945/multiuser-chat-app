import React from 'react'

const ChatUser = () => {
    return (
        <div className="flex items-center justify-center gap-4 p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="avatar avatar-online">
                <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                    <img 
                        src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" 
                        alt="User avatar"
                    />
                </div>
            </div>
            <div className="flex-1">
                <h1 className="font-bold text-lg text-gray-900 dark:text-white">Harsh R</h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">Offline</span>
            </div>
        </div>
    )
}

export default ChatUser
