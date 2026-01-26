const express = require("express")
const auth = require("../middleware/auth")
const role = require("../middleware/role")
const {
  createNews,
  getAllNews,
  setLiveNews,
  deleteNews,
  getLiveNews
} = require("../controllers/news.controller")

const router = express.Router()

router.post("/creative/news", auth, role(["creative"]), createNews)
router.get("/creative/news", auth, role(["creative"]), getAllNews)
router.patch("/creative/news/:id/live", auth, role(["creative"]), setLiveNews)
router.delete("/creative/news/:id", auth, role(["creative"]), deleteNews)

router.get("/rj/live-news", auth, role(["rj"]), getLiveNews)
router.get("/technical/live-news", auth, role(["technical"]), getLiveNews)

module.exports = router
