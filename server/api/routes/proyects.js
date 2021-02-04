const Projects = require("../../models/proyect");

module.exports = function (router) {
  router.get("/proyects", (req, res) => {
    Projects.find({
      isActive: { $eq: true },
    })
      .sort({ name: 1 })
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) => res.status(500).json(err));
  });
  router.post("/proyects", (req, res) => {
    let note = new Projects(req.body);
    note.save((err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(200).json(result);
    });
  });
};
