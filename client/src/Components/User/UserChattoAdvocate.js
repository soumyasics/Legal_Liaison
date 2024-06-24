import React, { useEffect, useRef, useState } from 'react'
import './UserChatToAdvocate.css'

function UserChattoAdvocate() {

  const messages = [
    { id: 1, user: 'Vincent', time: '10:20 AM, Today', message: 'Hello sir, i am subilan. i want some clarification. if you free please chat with me', type: 'sent' },
    { id: 2, user: 'Vincent', time: '10:20 AM, Today', message: 'Hello sir, i am subilan. i want some clarification. if you free please chat with me', type: 'received' },
    { id: 3, user: 'Vincent', time: '10:20 AM, Today', message: 'Hello sir, i am subilan. i want some clarification. if you free please chat with me', type: 'sent' },
  ];

  const [messageList, setMessageList] = useState(messages);
  const [inputValue, setInputValue] = useState('');
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messageList]);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messageList.length + 1,
        user: 'Vincent',
        time: new Date().toLocaleTimeString(),
        message: inputValue,
        type: 'sent'
      };
      setMessageList([...messageList, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className='user_chat'>
      <div className="chat-container">
        <div className="chat-header">
          <img src="https://via.placeholder.com/40" alt="user" className="avatar" />
          <span className="username">Vincent</span>
        </div>
        <div className="chat-body" ref={chatBodyRef}>
          {messageList.map(msg => (
            <div key={msg.id} className={`chat-message ${msg.type}`}>
              <div className="message-header">
                <span className="username">{msg.user}</span>
                <span className="timestamp">{msg.time}</span>
              </div>
              <p className="message-content">{msg.message}</p>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type Your Message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleSend}>
            <i className="ri-send-plane-fill"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserChattoAdvocate
