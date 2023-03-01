"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tools = void 0;
const typeorm_1 = require("typeorm");
let Tools = class Tools extends typeorm_1.BaseEntity {
};
Tools.modelName = "Tools";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tools.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 1 }),
    __metadata("design:type", Number)
], Tools.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false }),
    __metadata("design:type", String)
], Tools.prototype, "nameJp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false }),
    __metadata("design:type", String)
], Tools.prototype, "descriptionJp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 500, nullable: true }),
    __metadata("design:type", String)
], Tools.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], Tools.prototype, "nameTc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], Tools.prototype, "descriptionTc", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Tools.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Tools.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Tools.prototype, "deletedAt", void 0);
Tools = __decorate([
    (0, typeorm_1.Entity)("tools")
], Tools);
exports.Tools = Tools;
//# sourceMappingURL=tools.js.map