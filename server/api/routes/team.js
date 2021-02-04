const TeamMember = require("../../models/proyect");

module.exports = function (router) {
  router.get("/team", (req, res) => {
    TeamMember.find()
      .sort({ name: 1 })
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) => res.status(500).json(err));
  });
  router.post("/team", (req, res) => {
    let note = new TeamMember(req.body);
    note.save((err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(200).json(result);
    });
  });
};
