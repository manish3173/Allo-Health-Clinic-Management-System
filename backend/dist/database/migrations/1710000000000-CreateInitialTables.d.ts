import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateInitialTables1710000000000 implements MigrationInterface {
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}