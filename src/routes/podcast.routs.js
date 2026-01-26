const express = require("express")
const auth = require("../middleware/auth")
const role = require("../middleware/role")
const {
  createPodcast,
  getAllPodcasts,
  getAssignedPodcasts,
  markPodcastComplete
} = require("../controllers/podcast.controller")

const router = express.Router()

router.post("/creative/podcasts", auth, role(["creative"]), createPodcast)
router.get("/creative/podcasts", auth, role(["creative"]), getAllPodcasts)

router.get("/rj/podcasts", auth, role(["rj"]), getAssignedPodcasts)
router.patch("/rj/podcasts/:id/complete", auth, role(["rj"]), markPodcastComplete)

module.exports = router
