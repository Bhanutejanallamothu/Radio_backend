const News = require("../models/News")
const axios = require("axios")

exports.fetchNews = async (req, res) => {
  const response = await axios.get(process.env.NEWS_API_URL)
  res.json(response.data)
}

exports.saveAssignedNews = async (req, res) => {
  const saved = await News.bulkCreate(req.body)
  res.json(saved)
}

exports.getAssignedNewsForRJ = async (req, res) => {
  const news = await News.findAll({
    where: {
      assignedTo: req.user.id,
      saved: true
    }
  })
  res.json(news)
}
