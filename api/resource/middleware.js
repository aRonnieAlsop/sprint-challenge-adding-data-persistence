
const checkPayload = (req, res, next) => {
    const { resource_name } = req.body

    if (resource_name) {
        next()
    } else {
        next({ status: 400, message: 'name of resource is required' })
    }
}

module.exports = {
    checkPayload,
}