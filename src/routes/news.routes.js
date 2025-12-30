const express = require("express")
const auth = require("../middleware/auth")
const role = require("../middleware/role")
const {
  fetchNews,
  saveAssignedNews,
  getAssignedNewsForRJ
} = require("../controllers/news.controller")

const router = express.Router()

router.get("/fetch", auth, role(["creative"]), fetchNews)
router.post("/save", auth, role(["creative"]), saveAssignedNews)
router.get("/rj", auth, role(["rj"]), getAssignedNewsForRJ)

module.exports = router
