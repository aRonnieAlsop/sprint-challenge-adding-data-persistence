const checkPayload = (req, res, next) => {
    const { project_name } = req.body

    if (project_name) {
        next()
    } else {
        next({ status: 400, message: 'name of project is required' })
    }
}

module.exports = {
    checkPayload,
}