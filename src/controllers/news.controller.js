const News = require("../models/News")

exports.createNews = async (req, res) => {
  const { title, source } = req.body

  const news = await News.create({
    title,
    source
  })

  res.status(201).json(news)
}

exports.getAllNews = async (req, res) => {
  const news = await News.findAll({
    order: [["createdAt", "DESC"]]
  })

  res.json(news)
}

exports.setLiveNews = async (req, res) => {
  const { id } = req.params

  await News.update({ isLive: false }, { where: {} })

  const news = await News.findByPk(id)
  if (!news) {
    return res.status(404).json({ message: "News not found" })
  }

  await news.update({ isLive: true })

  res.json({ message: "News set as live" })
}

exports.getLiveNews = async (req, res) => {
  const news = await News.findOne({
    where: { isLive: true }
  })

  res.json(news)
}

exports.deleteNews = async (req, res) => {
  const { id } = req.params

  const news = await News.findByPk(id)
  if (!news) {
    return res.status(404).json({ message: "News not found" })
  }

  await news.destroy()

  res.json({ message: "News deleted" })
}
