import { Hono } from 'hono';
import { db } from '../db/db';
import { drivers } from '../db/schema';
import { sql, eq } from 'drizzle-orm';

const driversRouter = new Hono();

// Define the type for new driver insertion
type NewDriver = typeof drivers.$inferInsert;

// Get a list of drivers or a specific driver by ID
driversRouter.get('/:id?', async (c) => {
  const id = c.req.param('id');

  if (id) {
    // Fetch a specific driver by ID
    const driver = await db.select().from(drivers).where(eq(drivers.driver_id, parseInt(id))).execute();
    if (driver.length === 0) {
      return c.json({ error: 'Driver not found' }, 404);
    }
    return c.json(driver[0]);
  }

  // Fetch all drivers
  const driverList = await db.select().from(drivers).execute();
  return c.json(driverList);
});

// Create a new driver
driversRouter.post('/', async (c) => {
  try {
    const newDriver: NewDriver = await c.req.json();

    // Insert the new driver into the database
    const result = await db.insert(drivers).values(newDriver).execute();

    // Return the newly created driver with its ID
    return c.json({ ...newDriver, driver_id: result[0].insertId }, 201);
  } catch (error) {
    return c.json({ error: 'Invalid request body' }, 400);
  }
});

// Update a driver's information
driversRouter.put('/:id', async (c) => {
  try {
    const id = parseInt(c.req.param('id'));
    const updatedDriver: Partial<NewDriver> = await c.req.json();

    // Update the driver in the database
    const result = await db
      .update(drivers)
      .set(updatedDriver)
      .where(eq(drivers.driver_id, id))
      .execute();

    if (result[0].affectedRows === 0) {
      return c.json({ error: 'Driver not found' }, 404);
    }

    return c.json({ message: 'Driver updated successfully' });
  } catch (error) {
    return c.json({ error: 'Invalid request body' }, 400);
  }
});

// Delete a driver
driversRouter.delete('/:id', async (c) => {
  try {
    const id = parseInt(c.req.param('id'));

    // Delete the driver from the database
    const result = await db.delete(drivers).where(eq(drivers.driver_id, id)).execute();

    if (result[0].affectedRows === 0) {
      return c.json({ error: 'Driver not found' }, 404);
    }

    return c.json({ message: 'Driver deleted successfully' });
  } catch (error) {
    return c.json({ error: 'Invalid request' }, 400);
  }
});

export default driversRouter;
