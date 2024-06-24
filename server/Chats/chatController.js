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
    .populate('advId')
    .populate('userId')
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
const viewChatBetweenAdvAndJr = (req, res) => {
  let advId = req.body.advId;
  let jrId = req.body.jrId;
  chat
    .find({
      // $or: [{
       advId: advId, jrId: jrId },
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

const viewChatBetweenInternAndAdv = (req, res) => {
  let advId = req.body.advId;
  let internId = req.body.internId;
  chat
    .find({
      // $or: [{
       advId: advId, internId: internId },
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

module.exports = {
  chatting,
  viewChatRecipientsforAdvocateById,
  viewChatRecipientsforUserId,
  viewChatBetweenUserAndAdv,
  viewChatBetweenAdvAndJr,
  viewChatBetweenInternAndAdv
  
};
