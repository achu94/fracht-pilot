import { describe, it, expect, afterEach } from 'bun:test';
import app from '../src/index';
import { db } from '../src/db/db';
import { drivers } from '../src/db/schema';
import { eq } from 'drizzle-orm';

type InterfaceDriver = typeof drivers.$inferInsert;

describe('Driver API Endpoint Tests', () => {
  let createdDriverId: number | null = null;

  // Clean up after each test
  afterEach(async () => {
    if (createdDriverId) {
      await db.delete(drivers).where(eq(drivers.driver_id, createdDriverId)).execute();
      createdDriverId = null; // Reset the variable for future tests
    }
  });

  // Test for getting drivers list
  it('GET /api/v1/drivers should return 200 and a list of drivers', async () => {
    const response = await app.request('/api/v1/drivers');
    const data = await response.json();

    // Assertions
    expect(response.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);
  });

  // Test for adding a driver
  it('POST /api/v1/drivers should return 201 and a new driver', async () => {
    const newDriver: InterfaceDriver = { name: 'Jane Doe', driver_status: 'Available' };
    const response = await app.request('/api/v1/drivers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDriver),
    });
    const data = await response.json();

    // Store the ID of the newly created driver for cleanup
    createdDriverId = data.driver_id;

    // Assertions
    expect(response.status).toBe(201);
    expect(data).toHaveProperty('driver_id');
    expect(data).toHaveProperty('name', newDriver.name);
  });

  // Test for updating a driver
  it('PUT /api/v1/drivers/:id should update the driver and return 200', async () => {
    // First, create a driver to update
    const newDriver: InterfaceDriver = { name: 'John Doe', driver_status: 'Available' };
    const createResponse = await app.request('/api/v1/drivers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDriver),
    });
    const createdDriver = await createResponse.json();
    createdDriverId = createdDriver.driver_id;

    // Now, update the created driver
    const updatedDriver = { name: 'John Smith', driver_status: 'Busy' };
    const updateResponse = await app.request(`/api/v1/drivers/${createdDriverId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDriver),
    });
    const updateData = await updateResponse.json();

    // Assertions
    expect(updateResponse.status).toBe(200);
    expect(updateData).toHaveProperty('message', 'Driver updated successfully');
  });

  // Test for deleting a driver
  it('DELETE /api/v1/drivers/:id should delete the driver and return 200', async () => {
    // First, create a driver to delete
    const newDriver: InterfaceDriver = { name: 'Driver to Delete', driver_status: 'Available' };
    const createResponse = await app.request('/api/v1/drivers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDriver),
    });
    const createdDriver = await createResponse.json();
    createdDriverId = createdDriver.driver_id;

    // Now, delete the created driver
    const deleteResponse = await app.request(`/api/v1/drivers/${createdDriverId}`, {
      method: 'DELETE',
    });
    const deleteData = await deleteResponse.json();

    // Assertions
    expect(deleteResponse.status).toBe(200);
    expect(deleteData).toHaveProperty('message', 'Driver deleted successfully');

    // Set `createdDriverId` to null as it's already deleted
    createdDriverId = null;
  });
});
