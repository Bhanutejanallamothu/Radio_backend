const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const PodcastScript = sequelize.define("PodcastScript", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topic: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  isLive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  status: {
    type: DataTypes.ENUM("pending", "completed"),
    defaultValue: "pending"
  }
})

module.exports = PodcastScript
