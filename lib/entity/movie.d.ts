import { BaseEntity } from "typeorm";
export declare class Movies extends BaseEntity {
    static readonly modelName = "Movies";
    id: number;
    status: number;
    publishDate: string;
    nameJp: string;
    descriptionJp: string;
    imageUrl: string;
    nameTc: string;
    descriptionTc: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
