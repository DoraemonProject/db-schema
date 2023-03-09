import {MigrationInterface, QueryRunner} from "typeorm";

export class unique1678377809840 implements MigrationInterface {
    name = 'unique1678377809840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "movies"
            ALTER COLUMN "name_tc"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "movies"
            ADD CONSTRAINT "UQ_bdc19e5c6bd2e5ad705723c185c" UNIQUE ("name_tc")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "movies" DROP CONSTRAINT "UQ_bdc19e5c6bd2e5ad705723c185c"
        `);
        await queryRunner.query(`
            ALTER TABLE "movies"
            ALTER COLUMN "name_tc" DROP NOT NULL
        `);
    }

}
