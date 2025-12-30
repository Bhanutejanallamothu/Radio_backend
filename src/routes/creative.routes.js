const express = require("express")
const auth = require("../middleware/auth")
const role = require("../middleware/role")
const {
  createScript,
  getScripts,
  updateScript,
  deleteScript,
  makeLive
} = require("../controllers/script.controller")
const {
  createAnnouncement,
  getAnnouncements,
  updateAnnouncement,
  deleteAnnouncement
} = require("../controllers/announcement.controller")
const {
  createPodcast,
  getPodcasts,
  updatePodcast,
  deletePodcast
} = require("../controllers/podcast.controller")

const router = express.Router()

router.use(auth, role(["creative"]))

router.post("/scripts", createScript)
router.get("/scripts", getScripts)
router.put("/scripts/:id", updateScript)
router.delete("/scripts/:id", deleteScript)
router.patch("/scripts/:id/live", makeLive)

router.post("/announcements", createAnnouncement)
router.get("/announcements", getAnnouncements)
router.put("/announcements/:id", updateAnnouncement)
router.delete("/announcements/:id", deleteAnnouncement)

router.post("/podcasts", createPodcast)
router.get("/podcasts", getPodcasts)
router.put("/podcasts/:id", updatePodcast)
router.delete("/podcasts/:id", deletePodcast)

module.exports = router
