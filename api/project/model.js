// build your `Project` model here
const db = require('../../data/dbConfig')

const get = async () => {
    const projects = await db('projects')

    const listedProjects = projects.map((project) => ({
        project_name: project.project_name,
        project_description: project.project_description,
        project_completed: project.project_completed ? true : false
    }));

    return listedProjects
}

const createProject = async (project) => {
    const [project_id] = await db('projects').insert(project)
    return getProjectById(project_id)
}

const getProjectById = (project_id) => {
    return db('projects').where({ project_id }).first()
}

module.exports = {
    get,
    createProject,
    getProjectById,
}