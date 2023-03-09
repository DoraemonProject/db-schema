import { BaseEntity } from "typeorm";
export declare class Movies extends BaseEntity {
    static readonly modelName = "Movies";
    id: number;
    status: number;
    publishDate: string;
    nameTc: string;
    nameJp: string;
    descriptionTc: string;
    descriptionJp: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
