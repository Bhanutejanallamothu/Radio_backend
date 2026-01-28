const dns = require("dns")
dns.setDefaultResultOrder("ipv4first")

require("dotenv").config()

const cors = require("cors")
const sequelize = require("./config/db")
const app = require("./app")

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://6000-firebase-studio-1765370272139.cluster-xpmcxs2fjnhg6xvn446ubtgpio.cloudworkstations.dev",
      "https://signup-guardian.vercel.app",
      "https://9000-firebase-studio-1765370272139.cluster-xpmcxs2fjnhg6xvn446ubtgpio.cloudworkstations.dev"
    ],
    credentials: true
  })
)

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
  })
})
