exports.indexRoute = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Udunkulu API, see documentation for proper routing',
  });
};
