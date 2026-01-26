const PodcastScript = require("../models/PodcastScript")

exports.createPodcast = async (req, res) => {
  const { title, topic, content, assignedTo } = req.body
  const podcast = await PodcastScript.create({
    title,
    topic,
    content,
    assignedTo,
    status: "pending"
  })
  res.status(201).json(podcast)
}

exports.getAllPodcasts = async (req, res) => {
  const podcasts = await PodcastScript.findAll({
    order: [["createdAt", "DESC"]]
  })
  res.json(podcasts)
}

exports.getAssignedPodcasts = async (req, res) => {
  const podcasts = await PodcastScript.findAll({
    where: { assignedTo: req.user.id }
  })
  res.json(podcasts)
}

exports.markPodcastComplete = async (req, res) => {
  const podcast = await PodcastScript.findByPk(req.params.id)
  if (!podcast) return res.status(404).json({ message: "Not found" })
  podcast.status = "completed"
  await podcast.save()
  res.json(podcast)
}
