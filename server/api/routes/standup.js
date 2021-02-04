const mongoose = require("mongoose");
const Standup = require("../../models/standup");

module.exports = function (router) {
  router.get("/standup", (req, res) => {
    Standup.find()
      .sort({ createdOn: 1 })
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) => res.status(500).json(err));
  });
  router.post("/standup", (req, res) => {
    let note = new Standup(req.body);
    note.save((err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(200).json(result);
    });
  });
  router.get("/standup/:teamMemberId", (req, res) => {
    console.log(req.params.teamMemberId);
    const query = {
      _teamMemberId: mongoose.Types.ObjectId(req.params.teamMemberId),
    };
    Standup.find(query)
      .sort({ createdOn: 1 })
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) => res.status(500).send(err));
  });
};
