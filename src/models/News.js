const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const News = sequelize.define("News", {
  title: DataTypes.STRING,
  source: DataTypes.STRING,
  isLive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

module.exports = News
