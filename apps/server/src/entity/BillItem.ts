import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Entity,
} from 'typeorm';
import { Bill } from './Bill';
import { Product } from './Product';
@Entity()
export class BillItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  quantity: number;

  @ManyToOne((_typeName) => Product, (product) => product.billItem)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne((_typeName) => Bill, (bill) => bill.items)
  @JoinColumn({ name: 'bill_id' })
  bill: Bill;
}
