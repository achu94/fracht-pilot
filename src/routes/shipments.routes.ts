import { Hono } from 'hono'

const shipmentsRouter = new Hono()

shipmentsRouter.get('/', (c) => c.json('list shipments'))
shipmentsRouter.post('/', (c) => c.json('create a shipment', 201))
shipmentsRouter.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))
shipmentsRouter.post('/:id', (c) => c.json(`edit shipment`))

export default shipmentsRouter