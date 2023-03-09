"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMovie1678376276518 = void 0;
class addMovie1678376276518 {
    constructor() {
        this.name = 'addMovie1678376276518';
    }
    async up(queryRunner) {
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
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE "movies"
        `);
    }
}
exports.addMovie1678376276518 = addMovie1678376276518;
//# sourceMappingURL=1678376276518-add-movie.js.map