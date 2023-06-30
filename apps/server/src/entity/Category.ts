import {
  BaseEntity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './Product';

export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToMany((_typename) => Product, (product) => product.category)
  products: Product[];
}
