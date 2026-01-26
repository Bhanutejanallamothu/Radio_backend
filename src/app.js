const express = require("express")
const cors = require("cors")

const authRoutes = require("./routes/auth.routes")
const creativeRoutes = require("./routes/creative.routes")
const rjRoutes = require("./routes/rj.routes")
const technicalRoutes = require("./routes/technical.routes")
const newsRoutes = require("./routes/news.routes")
const publicRoutes = require("./routes/public.routes")
const announcementRoutes = require("./routes/announcements.routes")
const podcastRoutes = require("./routes/podcast.routes")


const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/creative", creativeRoutes)
app.use("/api/rj", rjRoutes)
app.use("/api/technical", technicalRoutes)
app.use("/api/creative/news", newsRoutes)
app.use("/api/public", publicRoutes)
app.use("/api/creative/announcements", announcementRoutes)
app.use("/api", podcastRoutes)
module.exports = app
