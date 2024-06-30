import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../Constants/BaseUrl";
import { imageUrl } from "../Constants/Image_Url";
import { toast } from "react-toastify";

function InternChatBox() {
  const { id } = useParams();
  const { type } = useParams();

    console.log(id);
  const iId = localStorage.getItem("internId");

  const [messageList, setMessageList] = useState([]);
  const [userDetalis, setUserDetails] = useState({});
  const [inputValue, setInputValue] = useState("");
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messageList]);

  useEffect(() => {
    axiosInstance
      .post(`viewgroupChatsByGroupId/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setMessageList(res.data.data);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`viewGroupById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setUserDetails(res.data.data);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleClientSend = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`joinGroup`,{internId:iId,groupId:id,msg:inputValue})
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setInputValue("");
          setMessageList((prevMessageList) => [
            ...prevMessageList,
            res.data.data,
          ]);
        } else {
          toast.error("Failed to send message");
        }
      })
      .catch(() => {
        toast.error("Failed to send message");
      });
    console.log("client");
  };

  return (
    <div>
      <div className="advocate_chat">
        {messageList.length ? (
          <div className="adv_chat_container">
            <div className="chat-header">
              <img
                src={`${imageUrl}/${userDetalis.profilePic.filename}`}
                className="img-fluid"
                alt="Advocate"
              />
              <span className="fs-5 px-3">{userDetalis.name}</span>
            </div>
            <div className="adv_chat-body" ref={chatBodyRef}>
              {messageList.map((msg) => (
                <div>
                    <div
                    //   key={msg.id}
                    //   className={`chat-message ${
                    //     msg.from == "users" && msg.to == "advocates"
                    //       ? "received"
                    //       : "sent"
                    //   }`
                    // }
                    >
                      <div className="message-header">
                        <span className="username">
                          <small>
                            {/* {msg.from == "users"
                              ? msg.userId.name
                              : msg.advId.name} */}
                          </small>
                        </span>
                        <span className="timestamp">
                          {msg.createdAt.slice(0, 10)}
                        </span>
                      </div>
                      {/* <p className="message-content">{msg.msg}</p> */}
                      <p className="message-content">hg x x</p>
                    </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleClientSend}>
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Type Your Message"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </form>
          </div>
        ) : (
            <>
            <div className="no_chat_container_chat">
            <h3>
              Start Conversation.
            </h3>
          </div>
          <form onSubmit={handleClientSend}>
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Type Your Message"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </form>
            </>
          
        )}
      </div>
    </div>
  );
}

export default InternChatBox;
