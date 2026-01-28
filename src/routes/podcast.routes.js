const express = require("express")
const router = express.Router()

const auth = require("../middleware/auth")
const role = require("../middleware/role")

const podcastController = require("../controllers/podcast.controller")

// ================= CREATIVE =================
router.get(
  "/creative/podcasts",
  auth,
  role("creative"),
  podcastController.getAllPodcasts
)

router.post(
  "/creative/podcasts",
  auth,
  role("creative"),
  podcastController.createPodcast
)

router.put(
  "/creative/podcasts/:id",
  auth,
  role("creative"),
  podcastController.updatePodcastByCreative
)

router.delete(
  "/creative/podcasts/:id",
  auth,
  role("creative"),
  podcastController.deletePodcast
)

router.patch(
  "/creative/podcasts/:id/live",
  auth,
  role("creative"),
  podcastController.setLivePodcast
)

// ================= RJ =================
router.get(
  "/rj/podcasts",
  auth,
  role("rj"),
  podcastController.getRJPodcasts
)

router.put(
  "/rj/podcasts/:id",
  auth,
  role("rj"),
  podcastController.updatePodcastByRJ
)

// ================= PUBLIC (LIVE) =================
router.get("/public/podcast/live", podcastController.getLivePodcast)

module.exports = router
