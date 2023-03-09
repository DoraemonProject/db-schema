import {MigrationInterface, QueryRunner} from "typeorm";

export class unique1678384620953 implements MigrationInterface {
    name = 'unique1678384620953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "movies"
            ALTER COLUMN "name_jp" DROP NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "movies"
            ALTER COLUMN "name_jp"
            SET NOT NULL
        `);
    }

}
