import {
  BaseEntity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './Category';

export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  unitPrice: number;

  @Column()
  stock: number;

  @ManyToMany((_type) => Category, (category) => category.products)
  category: Category[];
}
