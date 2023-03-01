"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update1677689264943 = void 0;
class update1677689264943 {
    constructor() {
        this.name = 'update1677689264943';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "tools"
            ALTER COLUMN "name_jp" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "tools"
            ALTER COLUMN "description_tc" DROP NOT NULL
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "tools"
            ALTER COLUMN "description_tc"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "tools"
            ALTER COLUMN "name_jp"
            SET NOT NULL
        `);
    }
}
exports.update1677689264943 = update1677689264943;
//# sourceMappingURL=1677689264943-update.js.map