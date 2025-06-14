import { OrderEntity } from '../../../../../orders/infrastructure/persistence/relational/entities/order.entity';

import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({
  name: 'payment',
})
export class PaymentEntity extends EntityRelationalHelper {
  @ManyToOne(() => OrderEntity, { eager: true, nullable: false })
  order: OrderEntity;

  @Column({
    nullable: false,
    type: String,
  })
  method: string;

  @Column({
    nullable: false,
    type: Date,
  })
  paymentDate: Date;

  @Column({
    nullable: false,
    type: Number,
  })
  amount: number;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
