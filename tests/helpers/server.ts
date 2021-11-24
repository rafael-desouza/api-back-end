import { Server } from 'http'

import { server as applicationServer } from '~/server'
import { logger } from '~/common/logger'
import { PORT } from '~/config/env'

export let server: Server

export const startServer = async (): Promise<void> => {
  const app = await applicationServer()
  server = app.listen(PORT, () => logger.info(`Test server is running on port ${PORT}`))
}

export const closeServer = async (): Promise<void> => {
  return new Promise(resolve => server.close(() => resolve()))
}
