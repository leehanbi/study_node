var express = require("express")
var router = express.Router()

/* GET home page. */
// introduce myself
// test haha my name is yongki
// test hanbi my name is hanbi aaa commit
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" })
})

module.exports = router
