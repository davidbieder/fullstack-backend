let express = require('express')
let router = express.Router()

router.get('/', function(req, res) {
  res.json({ title: 'Backend', version: 3 })
})

module.exports = router
