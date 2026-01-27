require("dotenv").config()
const sequelize = require("./config/db")
const app = require("./app")
const cors = require("cors")

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://signup-guardian.vercel.app",
      "https://6000-firebase-studio-1765370272139.cluster-xpmcxs2fjnhg6xvn446ubtgpio.cloudworkstations.dev/"
    ],
    credentials: true
  })
)

if (process.env.VERCEL !== "1") {
  sequelize.sync()
}

module.exports = app
