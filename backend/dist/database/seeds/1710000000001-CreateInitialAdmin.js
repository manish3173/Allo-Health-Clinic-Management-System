"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInitialAdmin1710000000001 = void 0;
const bcrypt = require("bcrypt");
class CreateInitialAdmin1710000000001 {
    async up(queryRunner) {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await queryRunner.query(`
      INSERT INTO users (username, password, role)
      VALUES ('admin', '${hashedPassword}', 'ADMIN')
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
      DELETE FROM users WHERE username = 'admin'
    `);
    }
}
exports.CreateInitialAdmin1710000000001 = CreateInitialAdmin1710000000001;
//# sourceMappingURL=1710000000001-CreateInitialAdmin.js.map