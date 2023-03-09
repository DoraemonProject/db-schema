import {MigrationInterface, QueryRunner} from "typeorm";

export class addMovie1678376276518 implements MigrationInterface {
    name = 'addMovie1678376276518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "movies" (
                "id" SERIAL NOT NULL,
                "status" integer NOT NULL DEFAULT '1',
                "publish_date" character varying(255),
                "name_jp" character varying(255) NOT NULL,
                "description_jp" character varying(255) NOT NULL,
                "image_url" character varying(500),
                "name_tc" character varying(255),
                "description_tc" character varying(255),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "movies"
        `);
    }

}
