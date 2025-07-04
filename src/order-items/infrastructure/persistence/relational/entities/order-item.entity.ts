import { ProductEntity } from '../../../../../products/infrastructure/persistence/relational/entities/product.entity';

import { OrderEntity } from '../../../../../orders/infrastructure/persistence/relational/entities/order.entity';

import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({
  name: 'order_item',
})
export class OrderItemEntity extends EntityRelationalHelper {
  @Column({
    nullable: false,
    type: Number,
  })
  unitPrice: number;

  @Column({
    nullable: false,
    type: Number,
  })
  quantity: number;

  @ManyToOne(() => ProductEntity, { eager: true })
  product?: ProductEntity | null;

  @ManyToOne(() => OrderEntity, { eager: true })
  order?: OrderEntity | null;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
