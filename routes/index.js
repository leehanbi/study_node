var express = require("express")
var router = express.Router()

/* GET home page. */
// introduce myself
// test haha my name is yongki
// test hanbi my name is hanbi aaa commit
// a_a_branch
// test c_branch aaaa
// 1
// 2
// 3
// 2
// 5
// edit yongkiC_branch aaa
// edit yongkiC_A_branch aaa
// hanbi_A_branch AAA
// hanbi_B_A_branch
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" })
})

module.exports = router
