import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './Category';
import { BillItem } from './BillItem';

@Entity()
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

  @OneToMany((_typeName) => BillItem, (billItem) => billItem.product)
  billItem: BillItem[];
}
