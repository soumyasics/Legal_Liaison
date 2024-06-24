import React, { useEffect, useRef, useState } from "react";
import "./UserChatToAdvocate.css";
import axiosInstance from "../Constants/BaseUrl";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function UserChattoAdvocate() {
  

  const uid=localStorage.getItem('userId')
  const {aid}=useParams()

  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messageList]);

  useEffect(()=>{
    axiosInstance
      .post(`viewChatBetweenUserAndAdv`,{advId:aid,userId:uid} )
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setMessageList(res.data.data)
        } else {
        }
      })
      .catch(() => {
        toast.error("Failed to Add Case");
      });
  },[])

  const handleSend = () => {
    
    console.log(inputValue);
    axiosInstance
      .post(`chatting`,{msg:inputValue,from:'users',to:'advocates',advId:aid,userId:uid} )
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
        } else {
        }
      })
      .catch(() => {
        toast.error("Failed to Add Case");
      });

  };

  console.log(messageList);

  return (
    <div className="user_chat">
      <div className="chat-container">
        <div className="chat-header">
          <img
            src="https://via.placeholder.com/40"
            alt="user"
            className="avatar"
          />
          <span className="username">Vincent</span>
        </div>

        <div className="chat-body" ref={chatBodyRef}>
          {messageList.length ? (
            messageList.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.from=='users'?'sent':'received'}`}>
                <div className="message-header">
                  <span className="username"><small>{msg.from=='users'?msg.userId.name:msg.advId.name}</small></span>
                  <span className="timestamp">{msg.createdAt.slice(0,10)}</span>
                </div>
                <p className="message-content">{msg.msg}</p>
              </div>
            ))
          ) : (
            <div className="no_chat_container">
              <h3>
                Please start the conversation and get the help or information
                you need.
              </h3>
            </div>
          )}
        </div>
        <form>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type Your Message"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="button" onClick={handleSend}>
              <i className="ri-send-plane-fill"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserChattoAdvocate;
