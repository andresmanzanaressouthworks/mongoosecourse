const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  isActive: { type: Boolean, defaul: true },
});

module.exports = mongoose.model("Projects", projectSchema);
