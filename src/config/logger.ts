import { isTestEnvironment } from './env'

/**
 * Loggin levels
 */
const INFO_LOG = 'info'

/**
 * Console options
 */
export const consoleOptions = {
  level: INFO_LOG,
  silent: isTestEnvironment
}
