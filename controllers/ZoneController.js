var Zone = require('../models/Zone')

module.exports = {
    find: function(params, callback){               //Define CRUD Operations
        Zone.find(params, function(err, zones){     //in modular format for reusability
            if(err){
                callback(err, null)
                return 
            }
            callback(null, zones)
        })
    },
    findById: function(id, callback){
        Zone.findById(id, function(err, zone){
            if(err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },
    create: function(params, callback){
        Zone.create(params, function(err, zone){
            if(err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },
    update: function(){

    },
    delete: function(){

    }
}