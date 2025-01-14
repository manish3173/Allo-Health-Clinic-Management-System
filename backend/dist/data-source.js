"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./users/entities/user.entity");
const doctor_entity_1 = require("./doctors/entities/doctor.entity");
const appointment_entity_1 = require("./appointments/entities/appointment.entity");
const queue_entity_1 = require("./queue/entities/queue.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [user_entity_1.User, doctor_entity_1.Doctor, appointment_entity_1.Appointment, queue_entity_1.Queue],
    migrations: ['src/database/migrations/*{.ts,.js}'],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map