import React from 'react'
import useConversation from '../../zustand/useConversation'

const ChatUser = () => {
    const { selectedConversation } = useConversation();

    // ✅ Handle null case
    if (!selectedConversation) {
        return (
            <div className="flex items-center justify-center h-[8%] bg-slate-800 text-gray-400">
                Select a user to start chat 👋
            </div>
        );
    }

    return (
        <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
            <div className="avatar avatar-online">
                <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                    <img 
                        src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" 
                        alt="User avatar"
                    />
                </div>
            </div>
            <div className="flex-1">
                <h1 className="font-bold text-lg text-white">
                    {selectedConversation.fullname}
                </h1>
                <span className="text-sm text-gray-400">Offline</span>
            </div>
        </div>
    )
}

export default ChatUser