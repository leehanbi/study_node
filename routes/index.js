var express = require("express")
var router = express.Router()

/* GET home page. */
// test4 hoho my name is yongky!!!
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" })
})

module.exports = router
