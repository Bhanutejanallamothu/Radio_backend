const News = require("../models/News")

exports.createNews = async (req, res) => {
  try {
    const { title, source } = req.body

    if (!title || !source) {
      return res.status(400).json({ message: "Title and source are required" })
    }

    const news = await News.create({
      title,
      source,
      isLive: false
    })

    res.status(201).json(news)
  } catch (error) {
    console.error("CREATE NEWS ERROR:", error)
    res.status(500).json({ message: "Failed to create news" })
  }
}

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.findAll({ order: [["createdAt", "DESC"]] })
    res.json(news)
  } catch (error) {
    console.error("FETCH NEWS ERROR:", error)
    res.status(500).json({ message: "Failed to fetch news" })
  }
}

exports.setLiveNews = async (req, res) => {
  try {
    const { id } = req.params

    await News.update({ isLive: false }, { where: {} })
    await News.update({ isLive: true }, { where: { id } })

    res.json({ message: "News set as live" })
  } catch (error) {
    console.error("SET LIVE NEWS ERROR:", error)
    res.status(500).json({ message: "Failed to set live news" })
  }
}

exports.deleteNews = async (req, res) => {
  try {
    const { id } = req.params
    await News.destroy({ where: { id } })
    res.json({ message: "News deleted" })
  } catch (error) {
    console.error("DELETE NEWS ERROR:", error)
    res.status(500).json({ message: "Failed to delete news" })
  }
}

exports.getLiveNews = async (req, res) => {
  try {
    const news = await News.findOne({ where: { isLive: true } })
    res.json(news)
  } catch (error) {
    console.error("FETCH LIVE NEWS ERROR:", error)
    res.status(500).json({ message: "Failed to fetch live news" })
  }
}
