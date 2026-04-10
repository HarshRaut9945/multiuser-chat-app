import React from "react";
import Mess from "./Mess";
import Loading from "../../components/Loading.jsx";
import useGetMessage from "../../context/useGetMessage.js";

const Messages = () => {
  const { loading, messages } = useGetMessage();

  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{
        minHeight: "calc(92vh - 8vh)",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "16px",
        backgroundColor: "#1a1a1a",
      }}
    >
      {loading ? (
        <Loading />
      ) : messages.length > 0 ? (
        messages.map((message) => (
          <div key={message._id}>
            <Mess message={message} />
          </div>
        ))
      ) : (
        <p className="text-center mt-[20%] text-gray-400">
          Say! Hi to start the conversation 👋
        </p>
      )}
    </div>
  );
};

export default Messages;