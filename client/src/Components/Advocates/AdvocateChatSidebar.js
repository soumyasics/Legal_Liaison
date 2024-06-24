import React, { useEffect, useState } from "react";
import "./AdvocateChatSidebar.css";
import img from "../../Assets/lawimg3.avif";
import { Link } from "react-router-dom";
import axiosInstance from "../Constants/BaseUrl";
import { toast } from "react-toastify";
import { imageUrl } from "../Constants/Image_Url";

function AdvocateChatSidebar() {
  const [users, setUsers] = useState([]);
  const [interns, setInterns] = useState([]);
  const [juniors, setJuniors] = useState([]);
  const id = localStorage.getItem("advocateId");

  useEffect(() => {
    axiosInstance
      .post(`viewChatRecipientsforAdvocateById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setUsers(res.data.users);
        } else {
        }
      })
      .catch(() => {
        toast.error("Failed to Add Case");
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="adv_chat_sidebar_search">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <i class="ri-search-2-line"></i>
                </span>
              </div>
            </div>

            {users.length == 0 && interns.length == 0 && juniors.length == 0 ? (
              <div className="adv_chat_sidebar_no_recipient">
                <p>No Recipient found</p>
              </div>
              
            ) : (
              <div>
                {
                  users.map((e)=>{
                    return(
                      <div className="adv_chat_sidebar_name">
                <Link to={`/advocate_single_chat/${e._id}`} >
                  <div className="d-flex">
                    <div className="adv_chat_sidebar_name_img">
                    <img src={`${imageUrl}/${e.profilePic.filename}`} className="img-fluid" alt="Advocate" />
                    </div>
                    <div className="adv_chat_sidebar_name_content px-3">
                      <div>
                        <p>
                          <b>{e.name}</b>
                        </p>
                        <p>
                          <small>[ Client ]</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
                    )
                  })
                }
                 
                </div>
              
             
              
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvocateChatSidebar;