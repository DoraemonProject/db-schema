"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update1677691251370 = void 0;
class update1677691251370 {
    constructor() {
        this.name = 'update1677691251370';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "tools"
            ADD "description_jp" character varying(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "tools"
            ADD "image_url" character varying(500)
        `);
        await queryRunner.query(`
            ALTER TABLE "tools"
            ALTER COLUMN "name_jp"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "tools"
            ALTER COLUMN "name_tc" DROP NOT NULL
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "tools"
            ALTER COLUMN "name_tc"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "tools"
            ALTER COLUMN "name_jp" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "tools" DROP COLUMN "image_url"
        `);
        await queryRunner.query(`
            ALTER TABLE "tools" DROP COLUMN "description_jp"
        `);
    }
}
exports.update1677691251370 = update1677691251370;
//# sourceMappingURL=1677691251370-update.js.map