import express from 'express'

const app = express()
const port = process.env.PORT || 4444
import db from './models'
import { projectassignments } from './seeders/projectassignments'
import { projects } from './seeders/projects'
import { users } from './seeders/users'

// const createUsers = () => {
//     users.map(user => {
//         db.User.create(user)
//     })
// }
// createUsers();

// const createProjects = () => {
//     projects.map(project => {
//         db.Project.create(project)
//     })
// }
// createProjects();

// const createProjectsAssignments = () => {
//     projectassignments.map(projectassignment => {
//         db.ProjectAssignment.create(projectassignment)
//     })
// }
// createProjectsAssignments();

app.get('/', (req, res) => {
    db.User.findAll({ include: { model: db.Project } })
    .then((result: object) => res.json(result)).catch((err: object) => {
        console.error(err)
    })
})

// db.User.findAll({ include: { model: db.Project } }).then((result: object) => console.log(JSON.stringify(result))).catch((err: object) => {
//     console.error(err)
// })

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App rodando na porta ${port}`)
    })
})