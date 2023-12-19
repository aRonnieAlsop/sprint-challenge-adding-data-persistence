const checkPayload = (req, res, next) => {
    const { task_description } = req.body

    if (task_description) {
        next()
    } else {
        next({ status: 400, message: 'description of task is required' })
    }
}

module.exports = {
    checkPayload,
}