"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInitialTables1710000000000 = void 0;
class CreateInitialTables1710000000000 {
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE TABLE users (
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role ENUM('STAFF', 'ADMIN') NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      )
    `);
        await queryRunner.query(`
      CREATE TABLE doctors (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        specialization VARCHAR(255) NOT NULL,
        availability JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      )
    `);
        await queryRunner.query(`
      CREATE TABLE appointments (
        id INT NOT NULL AUTO_INCREMENT,
        patient_name VARCHAR(255) NOT NULL,
        doctor_id INT NOT NULL,
        date_time DATETIME NOT NULL,
        status ENUM('BOOKED', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'BOOKED',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        FOREIGN KEY (doctor_id) REFERENCES doctors(id)
      )
    `);
        await queryRunner.query(`
      CREATE TABLE queue (
        id INT NOT NULL AUTO_INCREMENT,
        patient_name VARCHAR(255) NOT NULL,
        queue_number INT NOT NULL,
        priority INT DEFAULT 0,
        status ENUM('WAITING', 'WITH_DOCTOR', 'COMPLETED') NOT NULL DEFAULT 'WAITING',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      )
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE queue`);
        await queryRunner.query(`DROP TABLE appointments`);
        await queryRunner.query(`DROP TABLE doctors`);
        await queryRunner.query(`DROP TABLE users`);
    }
}
exports.CreateInitialTables1710000000000 = CreateInitialTables1710000000000;
//# sourceMappingURL=1710000000000-CreateInitialTables.js.map