import { app } from "./controller/app"
import { signup } from './controller/signup'
import { createTask } from './controller/createTask'
import { getTaskById } from './controller/getTaskById'
import { login } from './controller/login'

app.post('/user/signup', signup)
app.post('/user/login', login)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

