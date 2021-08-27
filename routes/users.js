let express = require('express')
let router = express.Router()

router.get('/', function(req, res) {
  res.json([ { name: 'John' }, { name: 'Jane' }, { name: 'Jim' } ])
})

module.exports = router
