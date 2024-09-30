import { Hono } from 'hono'

const toursRouter = new Hono()

toursRouter.get('/', (c) => c.json('list trucks'))
toursRouter.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default toursRouter