import express from 'express'
import { models, sequelize } from './db'

const app = express()
const port = process.env.PORT || 4444

app.get('/', async (req, res) => {
    models.User.findAll()
    .then((result: object) => res.json(result)).catch((err: object) => {
        console.error(err)
    })
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})