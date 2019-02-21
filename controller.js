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
            response.notFound(rows, res)
        }
        else{
            response.ok(rows, res)
        }
    })
}

//for delete data mahasiswa
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

//for create data mahasiswa
exports.createMahasiswa = function(req, res){
    var nim = req.body.nim
    var nama = req.body.nama
    var email = req.body.email
    var prodi = req.body.prodi

    connection.query('INSERT INTO mahasiswa VALUES (?,?,?,?)', [nim, nama, email, prodi], function(error, rows, fields){
        if(error){
            console.log(error)           
        }
        else{
            response.ok("berhasil menambah data mahasiswa", res)
        }
    })
}

//for update data mahasiswa
exports.updateMahasiswa = function(req, res){
    var nim = req.params.nim
    var nama = req.body.nama
    var email = req.body.email
    var prodi = req.body.prodi

    connection.query('UPDATE mahasiswa SET nama = ?, email = ?, prodi = ? WHERE nim = ?', [nama, email, prodi, nim], function(error, rows, fields){
        if(error){
            console.log(error)
        }
        else{
            response.ok("berhasil mengubah data mahasiswa", res)
        }
    })
}