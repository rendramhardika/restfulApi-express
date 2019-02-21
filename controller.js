'use strict'

var response = require('./res')
var connection = require('./conn')

//routes for index
exports.index = function(req, res){
    response.ok("Ini halaman index, restful api using express js", res)
}

//get all data mahasiswa
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

//get data mahasiswa by NIM
exports.getMahasiswa = function(req, res){
    var nim = req.params.nim

    connection.query('SELECT * FROM mahasiswa WHERE nim = ?',[nim], function(error, rows, fields){
        if(error){
            console.log(error)
        }
        else{
            response.ok(rows, res)
        }
    })
}

exports.deleteMahasiswa = function(req, res){
    var nim = req.params.nim

    connection.query('DELETE FROM mahasiswa WHERE nim = ?', [nim], function(error, rows, fields){
        if(error){
            console.log(error)
        }
        else{
            response.ok("berhasil menghapus data mahasiswa", res)
        }
    })
}
