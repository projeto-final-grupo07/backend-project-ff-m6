import { Express } from 'express'
import { userRoutes } from './user.routes'

const appRoutes = (app: Express) => {
	userRoutes(app)
}

export default appRoutes
