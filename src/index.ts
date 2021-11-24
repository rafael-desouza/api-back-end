import { logger } from './common/logger'
import { server } from './server'

/**
 * starting server
 */

server().then(app => app.listen(3000, () => logger.info('Server is running on port 3000')))
