import { Router } from 'express';
import { createTask } from '../controller/createTask';
import { getTaskById } from '../controller/getTaskById';

export const taskRouter = Router();

taskRouter.put('/', createTask);
taskRouter.get('/:id', getTaskById);
