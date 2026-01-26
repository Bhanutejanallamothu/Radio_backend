const express = require("express")
const auth = require("../middleware/auth")
const role = require("../middleware/role")
const podcastController = require("../controllers/podcast.controller")

const router = express.Router()

router.use(auth)

// CREATIVE
router.get(
  "/creative/podcasts",
  role(["creative"]),
  podcastController.getAllPodcasts
)

router.post(
  "/creative/podcasts",
  role(["creative"]),
  podcastController.createPodcast
)

router.patch(
  "/creative/podcasts/:id/live",
  role(["creative"]),
  podcastController.setLivePodcast
)

// RJ
router.get(
  "/rj/podcast",
  role(["rj"]),
  podcastController.getLivePodcast
)

router.patch(
  "/rj/podcast/:id/complete",
  role(["rj"]),
  podcastController.markPodcastComplete
)

module.exports = router
