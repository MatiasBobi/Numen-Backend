

module.exports = {
  listadecomprasController (req, res) {

    res.status(200).json({
      item1: req.query.item1,
      item2: req.query.item2,
      item3: req.query.item3,
      item4: req.query.item4,
      item5: req.query.item5,
    })
  }
}