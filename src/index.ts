import { logger } from './common/logger'
import { PORT } from './config/env'
import { server } from './server'

/**
 * starting server
 */

server().then(app => app.listen(PORT, () => logger.info(`Server is running on port ${PORT}`)))
