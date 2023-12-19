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

module.exports = {
    get,
}