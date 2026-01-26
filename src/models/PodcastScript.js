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
  assignedTo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "pending"
  }
})

module.exports = PodcastScript
