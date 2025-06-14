import { ProductDto } from '../../products/dto/product.dto';

import { OrderDto } from '../../orders/dto/order.dto';

import {
  // decorators here
  Type,
} from 'class-transformer';

import {
  // decorators here

  ValidateNested,
  IsNotEmptyObject,
  IsNumber,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

export class CreateOrderItemDto {
  @ApiProperty({
    required: true,
    type: () => Number,
  })
  @IsNumber()
  unitPrice: number;

  @ApiProperty({
    required: true,
    type: () => Number,
  })
  @IsNumber()
  quantity: number;

  @ApiProperty({
    required: true,
    type: () => ProductDto,
  })
  @ValidateNested()
  @Type(() => ProductDto)
  @IsNotEmptyObject()
  product: ProductDto;

  @ApiProperty({
    required: true,
    type: () => OrderDto,
  })
  @ValidateNested()
  @Type(() => OrderDto)
  @IsNotEmptyObject()
  order: OrderDto;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
