'use strict'

var response = require('./res')
var connection = require('./conn')

exports.mahasiswa = function(req, res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if(error){
            console.log(error)
        }
        else{
            response.ok(rows, res)
        }
    })
}

exports.index = function(req, res){
    response.ok("Ini halaman index, restful api using express js", res)
}