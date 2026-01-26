const express = require("express")
const auth = require("../middleware/auth")
const role = require("../middleware/role")

const scriptController = require("../controllers/script.controller")
const announcementController = require("../controllers/announcement.controller")
const podcastController = require("../controllers/podcast.controller")
const newsController = require("../controllers/news.controller")

const router = express.Router()

router.use(auth, role(["creative"]))

router.get("/scripts", scriptController.getScripts)
router.post("/scripts", scriptController.createScript)
router.put("/scripts/:id", scriptController.updateScript)
router.delete("/scripts/:id", scriptController.deleteScript)
router.patch("/scripts/:id/live", scriptController.setLiveScript)

router.get("/announcements", announcementController.getAnnouncements)
router.post("/announcements", announcementController.createAnnouncement)
router.put("/announcements/:id", announcementController.updateAnnouncement)
router.delete("/announcements/:id", announcementController.deleteAnnouncement)

router.get("/news", newsController.getAllNews)
router.post("/news", newsController.createNews)
router.put("/news/:id", newsController.updateNews)
router.delete("/news/:id", newsController.deleteNews)

router.get("/podcasts", podcastController.getAllPodcasts)
router.post("/podcasts", podcastController.createPodcast)
router.patch("/podcasts/:id/live", podcastController.setLivePodcast)

module.exports = router
