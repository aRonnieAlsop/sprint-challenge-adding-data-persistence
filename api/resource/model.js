// build your `Resource` model here
const db = require('../../data/dbConfig')

const get = () => {
    return db('resources')
}


module.exports = {
    get,
}

