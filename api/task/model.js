// build your `Task` model here
// build your `Project` model here
const db = require('../../data/dbConfig');

const getTasks = async () => {
    const tasks = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description');

    const modifiedTasks = tasks.map((task) => ({
        ...task,
        task_completed: task.task_completed ? true : false
    }));

    return modifiedTasks;
};

module.exports = {
    getTasks,
}