import { BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BillItem } from './BillItem';

export class Bill extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'date' })
  date: Date;

  @Column()
  totalAmount: number;

  @Column({ default: false })
  paymentStatus: boolean;

  @OneToMany((_typeName) => BillItem, (item) => item.bill, { cascade: true })
  items: BillItem[];
}
