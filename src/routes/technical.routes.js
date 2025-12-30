const express = require("express")
const auth = require("../middleware/auth")
const role = require("../middleware/role")
const { getLiveScript } = require("../controllers/script.controller")
const { getSuggestions, deleteSuggestion } = require("../controllers/song.controller")

const router = express.Router()

router.use(auth, role(["technical"]))

router.get("/live-script", getLiveScript)
router.get("/song-suggestions", getSuggestions)
router.delete("/song-suggestions/:id", deleteSuggestion)

module.exports = router
