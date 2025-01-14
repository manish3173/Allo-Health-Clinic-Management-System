import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity'; // Adjust the import paths as necessary
import { Doctor } from './doctors/entities/doctor.entity';
import { Appointment } from './appointments/entities/appointment.entity';
import { Queue } from './queue/entities/queue.entity';

// Create a new DataSource instance using environment variables
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST, // Use the DB_HOST from .env
  port: +process.env.DB_PORT, // Use the DB_PORT from .env
  username: process.env.DB_USER, // Use the DB_USER from .env
  password: process.env.DB_PASSWORD, // Use the DB_PASSWORD from .env
  database: process.env.DB_NAME, // Use the DB_NAME from .env
  entities: [User, Doctor, Appointment, Queue], // Add your entities here
  migrations: ['src/database/migrations/*{.ts,.js}'], // Path to your migration files
  synchronize: false, // Set to false in production
}); 