const chat = require("./chatSchema");

const chatting = async (req, res) => {

  // Create a new message
  const message = new chat({
    msg: req.body.msg,
    from:req.body.from,
    to: req.body.to,
    advId: req.body.advId,
    userId: req.body.userId,
    internId: req.body.internId,
    juniorAdvId: req.body.juniorAdvId,
    date:new Date()
  });
  await message
    .save()

    .then((data) => {
      res.json({
        status: 200,
        msg: "Inserted successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not Inserted",
        Error: err,
      });
    });
};

const viewChatRecipientsforAdvocateById = (req, res) => {
  chat
    .find({ advId: req.params.id })
    .populate("userId")
    .populate("juniorAdvId")
    .populate("internId")

    .exec()
    .then((data) => {
      if (data.length > 0) {
        let users = [],juniors=[],interns=[]
        data.map((x) => {
          users.push(x.userId);
          interns.push(x.internId);
          juniors.push(x.juniorAdvId);

        });
        const uniqueUsers = [...new Set(users)];
        const uniqueJuniors = [...new Set(juniors)];
        const uniqueInterns = [...new Set(interns)];

        res.json({
          status: 200,
          msg: "Data obtained successfully",
          users: uniqueUsers,
          juniors:uniqueJuniors,
          interns:uniqueInterns
        });
      } else {
        res.json({
          status: 200,
          msg: "No Data obtained ",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not Inserted",
        Error: err,
      });
    });
};
const viewChatRecipientsforUserId = (req, res) => {
  chat
    .find({ userId: req.params.id })
    .populate("advId")
    .exec()
    .then((data) => {
      if (data.length > 0) {
        adv = [];
        data.map((x) => {
          adv.push(x.advId);
        });
        const uniqueAdvs = [...new Set(adv)];
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: uniqueAdvs,
        });
      } else {
        res.json({
          status: 200,
          msg: "No Data obtained ",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not Inserted",
        Error: err,
      });
    });
};
const viewChatBetweenUserAndAdv = (req, res) => {
  let advId = req.body.advId;
  let userId = req.body.userId;
  chat
    .find({
      // $or: [{
       advId: advId, userId: userId },
        // { rpid: parentid, parentid: rpid },
      // ],}
    )
    .sort({ date: 1 })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "got it successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not obtained",
        Error: err,
      });
    });
};

// const getChatBetweenParentAndRp = async (req, res) => {
//   const { rpid, parentid } = req.body;
//   try {
//     const data = await chat.find({ rpid: rpid, parentid: parentid });
//     return res.status(200).json({
//       message: "Data obtained successfully",
//       data: data,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       message: "Error on get chat between parent and rp",
//       data: err,
//     });
//   }
// };
// const getAllChats = async (req, res) => {
//   try {
//     const data = await chat.find();
//     return res.status(200).json({
//       message: "Data obtained successfully",
//       data: data,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       message: "Error on get chat between parent and rp",
//       data: err,
//     });
//   }
// };

module.exports = {
  chatting,
  viewChatRecipientsforAdvocateById,
  viewChatRecipientsforUserId,
  viewChatBetweenUserAndAdv,
  
};
