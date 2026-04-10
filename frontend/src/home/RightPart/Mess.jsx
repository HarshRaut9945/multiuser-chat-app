import React from "react";

const Mess = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));

  const itsMe = message.senderId === authUser?.user?._id;

  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "bg-gray-700";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="px-2">
      <div className={`chat ${chatName}`}>
        <div className={`chat-bubble text-white ${chatColor}`}>
          {message.message}
        </div>
        <div className="chat-footer text-xs opacity-70 mt-1">
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default Mess;