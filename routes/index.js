var express = require("express")
var router = express.Router()

/* GET home page. */
// introduce myself
// test haha my name is yongki
// test 2 my name is hanbi 22222
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" })
})

module.exports = router
