import { Express } from 'express'
import { myController } from '../controllers/examples.controller'

function userRoutes(app: Express) {
	app.get('/users', myController)
}

export { userRoutes }
