// build your `/api/tasks` router here
const router = require('express').Router();

const Tasks = require('./model');

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks();
        res.json(tasks);
    } catch (error) {
        next(error);
    }
});

module.exports = router