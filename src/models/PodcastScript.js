const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const PodcastScript = sequelize.define("PodcastScript", {
  title: DataTypes.STRING,
  topic: DataTypes.STRING,
  content: DataTypes.TEXT,
  assignedTo: DataTypes.INTEGER,
  status: { type: DataTypes.STRING, defaultValue: "pending" }
})

module.exports = PodcastScript
