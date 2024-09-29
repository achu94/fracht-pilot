CREATE TABLE `drivers` (
	`driver_id` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`driver_status` varchar(255) NOT NULL,
	`avalible_from` timestamp NOT NULL,
	`avalible_until` timestamp NOT NULL,
	CONSTRAINT `drivers_driver_id` PRIMARY KEY(`driver_id`)
);
--> statement-breakpoint
CREATE TABLE `shipments` (
	`shipment_id` int NOT NULL,
	`origin` varchar(255) NOT NULL,
	`destination` varchar(255) NOT NULL,
	`shipment_status` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL,
	`updated_at` timestamp NOT NULL,
	CONSTRAINT `shipments_shipment_id` PRIMARY KEY(`shipment_id`)
);
--> statement-breakpoint
CREATE TABLE `tours` (
	`tour_id` int NOT NULL,
	`shipment_id` int NOT NULL,
	`driver_id` int NOT NULL,
	`trucks_id` int NOT NULL,
	`created_at` timestamp NOT NULL,
	`updated_at` timestamp NOT NULL,
	CONSTRAINT `tours_tour_id` PRIMARY KEY(`tour_id`)
);
--> statement-breakpoint
CREATE TABLE `trucks` (
	`trucks_id` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`truck_status` varchar(255) NOT NULL,
	CONSTRAINT `trucks_trucks_id` PRIMARY KEY(`trucks_id`)
);
