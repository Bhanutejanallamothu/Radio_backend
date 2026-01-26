const express = require("express")
const auth = require("../middleware/auth")
const role = require("../middleware/role")
const { getLiveScript } = require("../controllers/script.controller")
const { getAllNews } = require("../controllers/news.controller")
const { getAssignedPodcasts, markPodcastComplete } = require("../controllers/podcast.controller")
const { getAnnouncements } = require("../controllers/announcement.controller")

const router = express.Router()

router.use(auth, role(["rj"]))

router.get("/live-script", getLiveScript)
router.get("/news", getAllNews)
router.get("/podcasts", getAssignedPodcasts)
router.patch("/podcasts/:id/complete", markPodcastComplete)
router.get("/announcements", getAnnouncements)

module.exports = router
