const PodcastScript = require("../models/PodcastScript")

// ================= CREATIVE =================

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
    order: [["updated_at", "DESC"]]
  })
  res.json(podcasts)
}

exports.updatePodcastByCreative = async (req, res) => {
  const podcast = await PodcastScript.findByPk(req.params.id)
  if (!podcast) return res.status(404).json({ message: "Podcast not found" })

  const { title, topic, content, assignedTo } = req.body

  await podcast.update({
    title: title ?? podcast.title,
    topic: topic ?? podcast.topic,
    content: content ?? podcast.content,
    assignedTo: assignedTo ?? podcast.assignedTo
  })

  res.json(podcast)
}

exports.deletePodcast = async (req, res) => {
  const podcast = await PodcastScript.findByPk(req.params.id)
  if (!podcast) return res.status(404).json({ message: "Podcast not found" })

  await podcast.destroy()
  res.json({ message: "Podcast deleted successfully" })
}

// ================= LIVE =================

exports.setLivePodcast = async (req, res) => {
  await PodcastScript.update({ isLive: false }, { where: {} })

  const podcast = await PodcastScript.findByPk(req.params.id)
  if (!podcast) return res.status(404).json({ message: "Podcast not found" })

  await podcast.update({ isLive: true })
  res.json(podcast)
}

exports.getLivePodcast = async (req, res) => {
  const podcast = await PodcastScript.findOne({
    where: { isLive: true }
  })
  res.json(podcast)
}

// ================= RJ =================

exports.getRJPodcasts = async (req, res) => {
  const podcasts = await PodcastScript.findAll({
    where: { assignedTo: req.user.id },
    order: [["updated_at", "DESC"]]
  })
  res.json(podcasts)
}

exports.updatePodcastByRJ = async (req, res) => {
  const podcast = await PodcastScript.findByPk(req.params.id)
  if (!podcast) return res.status(404).json({ message: "Podcast not found" })

  if (podcast.assignedTo !== req.user.id) {
    return res.status(403).json({ message: "Not your assigned podcast" })
  }

  const { content, status } = req.body

  await podcast.update({
    content: content ?? podcast.content,
    status: status ?? podcast.status,
    isLive: status === "completed" ? false : podcast.isLive
  })

  res.json(podcast)
}
