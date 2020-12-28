const express = require("express");
const helloWorldService = require("./helloWorldService");
const router = express.Router();

router.get("/greet", async (req, res) => {
  helloWorldService.greet().then((greeting) => {
    res.send({ message: greeting });
  });
});

module.exports = router;
