var express = require("express")
var router = express.Router()

/* GET home page. */
<<<<<<< HEAD
// test4 haho my name is yongki
=======
// test4 hoho my name is yongky!!!
>>>>>>> yongkiTestAtHome2
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" })
})

module.exports = router
