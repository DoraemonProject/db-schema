"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unique1678377809840 = void 0;
class unique1678377809840 {
    constructor() {
        this.name = 'unique1678377809840';
    }
    async up(queryRunner) {
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
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "movies" DROP CONSTRAINT "UQ_bdc19e5c6bd2e5ad705723c185c"
        `);
        await queryRunner.query(`
            ALTER TABLE "movies"
            ALTER COLUMN "name_tc" DROP NOT NULL
        `);
    }
}
exports.unique1678377809840 = unique1678377809840;
//# sourceMappingURL=1678377809840-unique.js.map