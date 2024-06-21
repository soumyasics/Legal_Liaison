const mongoose = require("mongoose");

const caseSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  datoOfIncident: {
    type: Date,
    required: true,
  },
  opponentName: {
    type: String,
  },
  opponentAddress: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  evidence: {
    type: Object,
  },
  approvalStatus: {
    type: Boolean,
    default: false,
  },
  caseStatus: {
    type: String,
    default: "new",
  },
  advocateStatus: {
    type: Boolean,
    default: false,
  },
  advocateId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
});
module.exports = mongoose.model("cases", caseSchema);
