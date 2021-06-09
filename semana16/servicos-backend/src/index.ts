import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import { hash, compare } from "./services/hashManager";
import createAdress from "./endpoints/createAdress";


app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.post('/user/adress', createAdress)