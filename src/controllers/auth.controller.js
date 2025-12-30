const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.signup = async (req, res) => {
  const { username, password, role } = req.body

  const existing = await User.findOne({ where: { username } })
  if (existing) return res.status(409).json({ message: "Username already exists" })

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await User.create({
    username,
    password: hashedPassword,
    role
  })

  res.json({
    id: user.id,
    username: user.username,
    role: user.role
  })
}

exports.login = async (req, res) => {
  const { username, password, role } = req.body

  const user = await User.findOne({ where: { username, role } })
  if (!user) return res.status(404).json({ message: "User not found" })

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(401).json({ message: "Invalid credentials" })

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  )

  res.json({ token, role: user.role })
}
