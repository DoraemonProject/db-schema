import { BaseEntity } from "typeorm";
export declare class Tools extends BaseEntity {
    static readonly modelName = "Tools";
    id: number;
    status: number;
    nameJp: string;
    descriptionJp: string;
    imageUrl: string;
    nameTc: string;
    descriptionTc: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
