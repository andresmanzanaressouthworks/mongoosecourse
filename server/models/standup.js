const mongoose = require("mongoose");

const standupSchema = new mongoose.Schema({
  teamMemberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teamMembers",
  },
  teamMember: { type: String },
  project: { type: String },
  workYesterday: { type: String },
  workToday: { type: String },
  impediments: { type: String },
  createdOn: { type: Date, defaul: Date.now },
});

module.exports = mongoose.model("Standup", standupSchema);
