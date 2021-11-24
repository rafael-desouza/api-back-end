import { createLogger, transports } from 'winston'

import { consoleOptions } from '~/config/logger'

export const logger = createLogger({
  transports: new transports.Console(consoleOptions)
})
