const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const fs = require('fs')
const path = require('path')

const User = require('../models/User')

const authenticated = require('../middlewares/authenticated')

router.get('/checkauth', authenticated, (req, res) => 
    res.json({status: 'success', user: {name: res.locals.user.name}})
)

router.post('/signup', async (req, res) => {
    try {
        const {name, email, password} = req.body
        if(password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/) 
        && email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)){
            const user = await User.findOne({email: email})
            if (password) {   
                if (user)
                    res.json({status: 'failure', message: 'Email already exists'})
                else {
                    const salt = bcrypt.genSaltSync(10)
                    const hash = bcrypt.hashSync(password, salt)
                    await new User({name, email, password: hash}).save()
                    res.json({status: 'success', message: 'Sign up successful'})
                }
            }
        } else 
            res.json({status: 'falure', message: 'Invalid information'})
    } catch (err) {
        console.log(err)
        res.json({status: 'failure', message: 'Sign up unsuccessful'})
    }
})

router.post('/signin', async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user)
            res.json({status: 'failure', message: 'Incompatible information'})
        else {
            if (bcrypt.compareSync(password, user.password)) {
                req.session.user = {id: user.id}
                res.json({status: 'success', data: 'Sign in successful'})   
            } else 
                res.json({status: 'failure', message: 'Incompatible information'})  
        }
    } catch (err) {
        res.json({status: 'failure', message: 'Sign in unsuccessful'})
    }
})

router.post('/signout', authenticated, (req, res) => {
    try {
        delete req.session.user
        res.json({status: 'success', message: 'Sign out successful'})
    } catch (err) {
        res.json({status: 'failure', message: 'Sign out unsuccessful'})
    }
})

router.post('/changepass', authenticated, async (req, res) => {
    try {
        const {oldPassword, newPassword} = req.body
        if(newPassword.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)){
            if (bcrypt.compareSync(oldPassword, res.locals.user.password)) {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(newPassword, salt)
                res.locals.user.password = hash
                await res.locals.user.save()
                res.json({status: 'success', message: 'Passsword changed successful'})
            } else
                res.json({status: 'failure', message: 'Wrong password'})
        } else
            res.json({status: 'failure', message: 'Invalid password'})
    } catch (err) {
        res.json({status: 'failure', message: 'Password changed unsuccessful'})
    }
})

router.delete('/deleteaccount', authenticated, async (req, res) => {
    try {
        const {files} = res.locals.user
        for (const {filename} of files) {
            fs.existsSync(path.join(__dirname, `../uploads/${filename}`))
            && await fs.promises.unlink(path.join(__dirname, `../uploads/${filename}`))
        }
        await res.locals.user.remove()
        res.json({status: 'success', message: 'Account deleted successful'})
    } catch (err) {
        res.json({status: 'failure', message: 'Account deleted unsuccessful'})
    }
})

module.exports = router