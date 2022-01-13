module.exports = (res, error) => {
  res.status(500).json({
    status: "Internal server error",
    message: error.message,
  });
};
