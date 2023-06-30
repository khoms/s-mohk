import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
