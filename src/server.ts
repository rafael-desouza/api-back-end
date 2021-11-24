import 'reflect-metadata'
import { Express } from 'express'
import { createExpressServer, RoutingControllersOptions } from 'routing-controllers'

export const serverOptions: RoutingControllersOptions = {
  cors: '*',
  defaultErrorHandler: true
}

const app: Express = createExpressServer(serverOptions)

export const server = async () => {
  return app
}
