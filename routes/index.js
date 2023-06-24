const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()

const authenticated = require('../middlewares/authenticated')
const upload = require('../middlewares/upload')

router.post('/uploadFile', upload.single('file'), authenticated, async (req, res) => {
    try {
        if(req.file) {
            res.locals.user.files.push({
                filename: req.file.filename,
                originalname: req.file.originalname
            })
            const user = await res.locals.user.save()
            res.json({status: 'success', files: user.files})
        } else 
            res.json({status: 'failure', message: 'No file selected'})
    } catch (err) {
        res.json({status: 'failure', message: 'File uploaded unsuccessful'})
    }

})

router.post('/deleteFile', authenticated, async (req, res) => {
    try {
        const filename = res.locals.user.files.find(({id}) => id === req.body.fileID).filename

        fs.existsSync(path.join(__dirname, `../uploads/${filename}`))
        && await fs.promises.unlink(path.join(__dirname, `../uploads/${filename}`))

        res.locals.user.files.findIndex(file => file.id === req.body.fileID) !== -1
        && res.locals.user.files.splice(res.locals.user.files.findIndex(file => file.id === req.body.fileID), 1)
    
        const user = await res.locals.user.save()
        res.json({status: 'success', files: user.files})
    } catch (err) {
        res.json({status: 'failure', message: 'Note deleted unsuccessful'})
    }
})

router.get('/listfiles', authenticated, (req, res) => {
    const {files} = res.locals.user
    res.json({status: 'success', files: files})
})

router.post('/loadfile', authenticated, (req, res) => {
    const filename = res.locals.user.files.find(({id}) => id === req.body.fileID).filename
    
    const {files} = res.locals.user
    const fileExistence = (files.some(file => file.filename === filename) 
    && fs.existsSync(path.join(__dirname, `../uploads/${filename}`)))

    if (fileExistence)
        res.sendFile(filename, {root: path.join(__dirname, '../uploads')})
    else 
        res.send('No such file exists')
})

router.post('/addNote', authenticated, async (req, res) => {
    try {
        res.locals.user.files.map(file => 
            (file.id === req.body.fileID) 
            ? file.notes.push(req.body.note) 
            : file
        )
        const user = await res.locals.user.save()
        res.json({status: 'success', files: user.files})
    } catch (err) {
        res.json({status: 'failure', message: 'Note added unsuccessful'})
    }
})

router.post('/deleteNote', authenticated, async (req, res) => {
    try {
        res.locals.user.files.map(file => 
            (file.id === req.body.fileID) 
            ? file.notes.findIndex(note => note.id === req.body.noteID) === -1
                ? file
                : file.notes.splice(file.notes.findIndex(note => note.id === req.body.noteID), 1)
            : file
        )
        const user = await res.locals.user.save() 
        res.json({status: 'success', files: user.files})
    } catch (err) {
        res.json({status: 'failure', message: 'Note deleted unsuccessful'})
    }
})

module.exports = router