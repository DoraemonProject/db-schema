"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1677687355309 = void 0;
class init1677687355309 {
    constructor() {
        this.name = 'init1677687355309';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "tools" (
                "id" SERIAL NOT NULL,
                "status" integer NOT NULL DEFAULT '1',
                "name_tc" character varying(255) NOT NULL,
                "name_jp" character varying(255) NOT NULL,
                "description_tc" character varying(255) NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_e23d56734caad471277bad8bf85" PRIMARY KEY ("id")
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE "tools"
        `);
    }
}
exports.init1677687355309 = init1677687355309;
//# sourceMappingURL=1677687355309-init.js.map