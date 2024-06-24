import React from 'react'
import './AdvocateChat.css'
import AdvocateChatSidebar from './AdvocateChatSidebar'
import AdvocateChatBox from './AdvocateChatBox'

function AdvocateChat() { 
  return (
    <div>
      <div className="container-fluid advocate_main" >
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 advocate_chat_sidebar" style={{padding:0}}>
          <AdvocateChatSidebar />
        </div>
        <div className=" col-lg-9 col-md-6 col-sm-12"  >
            <AdvocateChatBox/>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdvocateChat
