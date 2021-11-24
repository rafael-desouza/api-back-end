import { server } from './server'

/**
 * starting server
 */

server().then(app => app.listen(3000, () => console.log('Server is running on port 3000')))
