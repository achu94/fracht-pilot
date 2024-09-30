import { timestamp, int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const trucks = mysqlTable('trucks', {
  trucks_id: int('trucks_id').notNull().primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  truck_status: varchar('truck_status', { length: 255 }).notNull(),
});

export const drivers = mysqlTable('drivers', {
  driver_id: int('driver_id').notNull().primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  driver_status: varchar('driver_status', { length: 255 }),
  avalible_from: timestamp('avalible_from'),
  avalible_until: timestamp('avalible_until'),
});

export const shipments = mysqlTable('shipments', {
  shipment_id: int('shipment_id').notNull().primaryKey().autoincrement(),
  origin: varchar('origin', { length: 255 }).notNull(),
  destination: varchar('destination', { length: 255 }).notNull(),
  shipment_status: varchar('shipment_status', { length: 255 }).notNull(),
  created_at: timestamp('created_at').notNull(),
  updated_at: timestamp('updated_at').notNull(),
});

export const tours = mysqlTable('tours', {
  tour_id: int('tour_id').notNull().primaryKey().autoincrement(),
  shipment_id: int('shipment_id').references(() => shipments.shipment_id),
  driver_id: int('driver_id').references(() => drivers.driver_id),
  trucks_id: int('trucks_id').references(() => trucks.trucks_id),
  created_at: timestamp('created_at').notNull(),
  updated_at: timestamp('updated_at').notNull(),
});