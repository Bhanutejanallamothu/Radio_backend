module.exports = (...allowedRoles) => {
  return (req, res, next) => {
    const role = req.user?.role

    if (!role) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    if (role === "station_head") {
      return next()
    }

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ message: "Forbidden" })
    }

    next()
  }
}
