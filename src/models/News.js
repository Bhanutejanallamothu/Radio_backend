const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const News = sequelize.define("News", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isLive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

module.exports = News
