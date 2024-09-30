import { Hono } from 'hono'
import { logger } from 'hono/logger'
import router from './routes'

const app = new Hono()


// use only if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.use('*', logger());
}

// Routes
app.route('/api/v1', router);

export default app
