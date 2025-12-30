const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const News = sequelize.define("News", {
  title: DataTypes.STRING,
  source: DataTypes.STRING,
  assignedTo: DataTypes.INTEGER,
  saved: { type: DataTypes.BOOLEAN, defaultValue: false }
})

module.exports = News
