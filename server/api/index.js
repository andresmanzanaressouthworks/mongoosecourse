const express = require("express");
const router = express.Router();

require("./routes/proyects")(router);
require("./routes/standup")(router);
require("./routes/team")(router);

module.exports = router;
