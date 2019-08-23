var express = require("express")
var router = express.Router()

/* GET home page. */
// test4 haho my name is yongki
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" })
})

module.exports = router
