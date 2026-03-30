import React from "react";
import Mess from "./Mess";

const Message = () => {
    return (
        <div className="flex-1 overflow-y-auto"
            style={{
                minHeight: "calc(92vh - 8vh)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "16px",
                overflowY: "auto",
                backgroundColor: "#1a1a1a"
            }}
        >
            <Mess />
            <Mess />
            <Mess />
            
        </div>
    );
};

export default Message;
