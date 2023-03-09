import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("movies")
export class Movies extends BaseEntity {
  static readonly modelName = "Movies";
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int", default: 1 })
  status: number;

  @Column({ type: "varchar", length: 255, nullable: true })
  publishDate: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  nameJp: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  descriptionJp: string;

  @Column({ type: "varchar", length: 500, nullable: true })
  imageUrl: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  nameTc: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  descriptionTc: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
