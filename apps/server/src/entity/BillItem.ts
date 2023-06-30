import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Bill } from './Bill';

export class BillItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  quantity: number;

  @ManyToOne((_typeName) => Bill, (bill) => bill.items)
  @JoinColumn({ name: 'bill_id' })
  bill: Bill;
}
