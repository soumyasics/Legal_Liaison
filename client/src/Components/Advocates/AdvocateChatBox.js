import React, { useEffect, useRef, useState } from 'react'
import './AdvocateChatBox.css'
import { useParams } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';
import { toast } from 'react-toastify';
import { imageUrl } from '../Constants/Image_Url';

function AdvocateChatBox() {

  const {uid}=useParams();

  const aid=localStorage.getItem('advocateId')

    
      const [messageList, setMessageList] = useState([]);
      const [userDetalis, setUserDetails] = useState({profilePic:{filename:''}});
      const [inputValue, setInputValue] = useState('');
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
          .catch((err) => {
            console.log(err);
          });

        axiosInstance
          .post(`viewUserById/${uid}` )
          .then((res) => {
            console.log(res);
            if (res.data.status === 200) {
              setUserDetails(res.data.data)
            } else {
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },[uid])
    
      const handleSend = (e) => {
        e.preventDefault();
        axiosInstance
          .post(`chatting`, { msg: inputValue, from: 'advocates', to: 'users', advId: aid, userId: uid })
          .then((res) => {
            console.log(res);
            if (res.data.status === 200) {
              setInputValue('');
              setMessageList(prevMessageList => [...prevMessageList, res.data.data]);
            } else {
              toast.error("Failed to send message");
            }
          })
          .catch(() => {
            toast.error("Failed to send message");
          });
      };
      

      console.log(userDetalis);

  return (
    <div>
      <div className='advocate_chat'>
        {
          messageList.length?<div className="adv_chat_container">
        <div className="chat-header">
        <img src={`${imageUrl}/${userDetalis.profilePic.filename}`} className="img-fluid" alt="Advocate" />
        <span className="fs-5 px-3">{userDetalis.name}</span>
        </div>
        <div className="adv_chat-body" ref={chatBodyRef}>
          {messageList.map(msg => (
            <div key={msg.id} className={`chat-message ${msg.from=='users'?'received':'sent'}`}>
              <div className="message-header">
              <span className="username"><small>{msg.from=='users'?msg.userId.name:msg.advId.name}</small></span>
              <span className="timestamp">{msg.createdAt.slice(0,10)}</span>
              </div>
              <p className="message-content">{msg.msg}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} >
          <div className="chat-input">
          <input
            type="text"
            placeholder="Type Your Message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type='submit' >
            <i className="ri-send-plane-fill"></i>
          </button>
        </div>
        </form>
        
      </div>:
      <div className='no_chat_container' >
        <h3>Please select a person to start a conversation and get the help or information you need.</h3>
      </div>
        }
      
    </div>
    </div>
  )
}

export default AdvocateChatBox
