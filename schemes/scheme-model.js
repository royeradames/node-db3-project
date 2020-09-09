const db = require('../data/connections');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

function find() {
    return db('schemes')
}
function findById(id) {
    return db('schemes').where('id', id)
}
function findSteps(id) {
    return db('schemes as sc').where('id', id).join('steps as s', 's.scheme_id', 'sc.id').select('s.*')
}
function add(newScheme) {
    return db('schemes').insert(newScheme)
}
function addStep(newStep, id) {
    return db('steps').where('id', id).insert(newStep)
}
function update(changes, id) {
    return db('schemes').where('id', id).update(changes)
}
function remove(id) {
    return db('schemes').where('id', id).update(changes)

}