const db = require('../../data/dbConfig')

const get = () => {
    return db('resources')
}

const createResource = async (resource) => {
    const [resource_id] = await db('resources').insert(resource)
    return getResourceById(resource_id)
}

const getResourceById = (resource_id) => {
    return db('resources').where({ resource_id }).first()
}

module.exports = {
    get,
    createResource,
}

