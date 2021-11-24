import { Server } from 'http'

import { server as applicationServer } from '~/server'

export let server: Server

export const startServer = async (): Promise<void> => {
  const app = await applicationServer()
  server = app.listen(3000, () => console.log('Test server is running on port 3000'))
}

export const closeServer = async (): Promise<void> => {
  return new Promise(resolve => server.close(() => resolve()))
}
