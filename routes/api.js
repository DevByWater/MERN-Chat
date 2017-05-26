var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
    res.json({
        confirmation: 'Api entry'
    })
})

router.get('/:resource', function(req, res, next){
    resource = req.params.resource
    res.json({
        confirmation: 'Success Api-endpoint: ' + resource,
        resource: resource
    })

})

module.exports = router