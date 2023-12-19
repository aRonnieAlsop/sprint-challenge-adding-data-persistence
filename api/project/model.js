
const db = require('../../data/dbConfig')

const get = async () => {
    const projects = await db('projects')

    const completedProjects = projects.map((project) => ({
        ...project,
        project_completed: Boolean(project.project_completed),
    }));

    return completedProjects
}

const createProject = async (project) => {
    const [project_id] = await db('projects').insert(project)
    return getProjectById(project_id)
}

const getProjectById = (project_id) => {
    return db('projects').where({ project_id }).first().then(project => ({
        project_name: project.project_name,
        project_description: project.project_description,
        project_completed: Boolean(project.project_completed),
    }))
}

module.exports = {
    get,
    createProject,
    getProjectById,
}