import 'reflect-metadata'
import { Express } from 'express'
import { createExpressServer, RoutingControllersOptions } from 'routing-controllers'
import path from 'path'

const controllersPath = path.resolve(__dirname, 'api', 'routes', '**', 'controller.ts')

export const serverOptions: RoutingControllersOptions = {
  cors: '*',
  defaultErrorHandler: true,
  controllers: [controllersPath]
}

const app: Express = createExpressServer(serverOptions)

export const server = async () => {
  return app
}
