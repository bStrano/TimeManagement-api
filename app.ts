import morgan from "morgan";
import express from 'express';

const app = express()

import categoryRouter from './src/routes/CategoryRouter';
import routineRouter from './src/routes/RoutineRouter'

const DEFAULT_ROUTE = "/stralom/timemanagement"


app.use(morgan('dev'));
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))


app.use(`${DEFAULT_ROUTE}/category`, categoryRouter)
app.use(`${DEFAULT_ROUTE}/routines`, routineRouter)


export default app;
