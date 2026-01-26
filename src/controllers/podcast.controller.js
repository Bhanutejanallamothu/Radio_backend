const PodcastScript = require("../models/PodcastScript")

exports.createPodcast = async (req, res) => {
  const { title, topic, content } = req.body
  const podcast = await PodcastScript.create({
    title,
    topic,
    content,
    status: "pending",
    isLive: false
  })
  res.status(201).json(podcast)
}

exports.getAllPodcasts = async (req, res) => {
  const podcasts = await PodcastScript.findAll({
    order: [["createdAt", "DESC"]]
  })
  res.json(podcasts)
}

exports.setLivePodcast = async (req, res) => {
  await PodcastScript.update({ isLive: false }, { where: {} })
  await PodcastScript.update(
    { isLive: true },
    { where: { id: req.params.id } }
  )
  const podcast = await PodcastScript.findByPk(req.params.id)
  res.json(podcast)
}

exports.getLivePodcast = async (req, res) => {
  const podcast = await PodcastScript.findOne({
    where: { isLive: true, status: "pending" }
  })
  res.json(podcast)
}

exports.markPodcastComplete = async (req, res) => {
  const podcast = await PodcastScript.findByPk(req.params.id)
  if (!podcast) return res.status(404).json({ message: "Not found" })
  podcast.status = "completed"
  podcast.isLive = false
  await podcast.save()
  res.json(podcast)
}
