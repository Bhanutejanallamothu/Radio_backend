require("dotenv").config()
const sequelize = require("./config/db")
const app = require("./app")

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server running")
  })
})
