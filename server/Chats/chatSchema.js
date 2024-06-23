const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    msg: {
      type: String,
      required: true,
      
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
   advId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "advocates"
    },
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    
    },
    internId:{
      type: mongoose.Schema.Types.ObjectId,
     
      
    },
    juniorAdvId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "junioradvocates",
     
    },date:{
      type: Date,
      required: true,
    }

  },
  { timestamps: true }
);

const Message = mongoose.model("chats", messageSchema);

module.exports = Message;
