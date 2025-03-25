import React, { useState } from "react";
import ChatCard from "../ChatCard/ChatCard";

const ChatComponent = ({ chat, onFeedbackClick }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {chat.map((chatItem, index) => (
        <ChatCard key={index} chat={chatItem} onFeedbackClick={onFeedbackClick} />
      ))}
    </div>
  );
};


export default ChatComponent
