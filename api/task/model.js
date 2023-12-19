
const db = require('../../data/dbConfig')

const getTasks = async () => {
    const tasks = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select(
            'task_id', 
            'task_description', 
            'task_notes', 'task_completed', 
            'project_name', 
            'project_description'
            )

    const completedTasks = tasks.map((task) => ({
        ...task,
        task_completed: Boolean(task.task_completed)
    }))

    return completedTasks
}

module.exports = {
    getTasks,
}

// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, 
//   the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz",
//   "task_notes":null,"task_completed":false,"project_id:1}`