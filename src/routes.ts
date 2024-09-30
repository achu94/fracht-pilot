import { Hono } from "hono"

import driverRoute from "./routes/drivers.routes"
import shipmentRoute from "./routes/shipments.routes"
import truckRoute from "./routes/trucks.routes"
import tourRoute from "./routes/tours.routes"

const router = new Hono()

router.route('/drivers', driverRoute)
router.route('/shipments', shipmentRoute)
router.route('/trucks', truckRoute)
router.route('/tours', tourRoute)

export default router;