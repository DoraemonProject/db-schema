"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unique1678384620953 = void 0;
class unique1678384620953 {
    constructor() {
        this.name = 'unique1678384620953';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "movies"
            ALTER COLUMN "name_jp" DROP NOT NULL
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "movies"
            ALTER COLUMN "name_jp"
            SET NOT NULL
        `);
    }
}
exports.unique1678384620953 = unique1678384620953;
//# sourceMappingURL=1678384620953-unique.js.map