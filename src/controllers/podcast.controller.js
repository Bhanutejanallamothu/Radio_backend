const PodcastScript = require("../models/PodcastScript")

exports.createPodcast = async (req, res) => {
  const podcast = await PodcastScript.create(req.body)
  res.json(podcast)
}

exports.getPodcasts = async (req, res) => {
  const podcasts = await PodcastScript.findAll({
    order: [["updatedAt", "DESC"]]
  })
  res.json(podcasts)
}

exports.updatePodcast = async (req, res) => {
  await PodcastScript.update(req.body, {
    where: { id: req.params.id }
  })
  const updated = await PodcastScript.findByPk(req.params.id)
  res.json(updated)
}

exports.deletePodcast = async (req, res) => {
  await PodcastScript.destroy({ where: { id: req.params.id } })
  res.json({ success: true })
}

exports.getAssignedPodcasts = async (req, res) => {
  const podcasts = await PodcastScript.findAll({
    where: { assignedTo: req.user.id }
  })
  res.json(podcasts)
}

exports.markPodcastComplete = async (req, res) => {
  await PodcastScript.update(
    { status: "completed" },
    { where: { id: req.params.id } }
  )
  const updated = await PodcastScript.findByPk(req.params.id)
  res.json(updated)
}
