'use strict'

module.exports = function(app){
    var todoList = require('./controller')

    app.route('/').get(todoList.index)

    app.route('/mahasiswa').get(todoList.mahasiswa)
    app.route('/mahasiswa/:nim').get(todoList.getMahasiswa)
    app.route('/mahasiswa/:nim').delete(todoList.deleteMahasiswa)
    app.route('/mahasiswa').post(todoList.createMahasiswa)
    app.route('/mahasiswa/:nim').put(todoList.updateMahasiswa)
}