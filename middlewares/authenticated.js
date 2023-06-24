const User  = require('../models/User')

const authenticated = (req, res, next) => {
    if (req.session.user && req.session.user.id) {
        User.findOne({'_id': req.session.user.id})
        .then(user => {
            if (!user) {
                res.json({status: 'failure', message: 'Not authenticated'})
            } else {
                res.locals.user = user
                next()
            }
        }).catch(_ => {
            res.json({status: 'failure', message: 'Not authenticated'})
        })
    } else {
        res.json({status: 'failure', message: 'Not authenticated'})
    }
}

module.exports = authenticated