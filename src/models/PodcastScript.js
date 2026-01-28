const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const PodcastScript = sequelize.define(
  "podcast_scripts",
  {
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
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("pending", "completed"),
      defaultValue: "pending"
    },
    isLive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    underscored: true
  }
)

module.exports = PodcastScript
