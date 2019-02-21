'use strict'

//response for success process
exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    }
    res.json(data)
    res.end()
}

//response for not found result
exports.notFound = function(values, res){
    var data = {
        'status':404,
        'values':values
    }
    res.json(data)
    res.end()
}