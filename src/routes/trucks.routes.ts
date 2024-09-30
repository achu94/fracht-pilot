import { Hono } from 'hono'

const trucksRouter = new Hono()

trucksRouter.get('/', (c) => c.json('list trucks'))
trucksRouter.post('/', (c) => c.json('create a truck', 201))
trucksRouter.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))
trucksRouter.post('/:id', (c) => c.json(`edit truck`))

export default trucksRouter