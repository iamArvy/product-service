import { ApiProperty } from '@nestjs/swagger';

export class ProductResponse {
  @ApiProperty({ description: 'Unique identifier for the certification' })
  name: string;

  @ApiProperty({ description: 'Unique identifier for the certification' })
  description: string;

  @ApiProperty({ description: 'Unique identifier for the certification' })
  store: {
    id: string;
    name: string;
  };

  @ApiProperty({
    type: Object,
    description: 'Unique identifier for the certification',
    example: {
      id: 'category_id',
      name: 'category_name',
    },
  })
  category: {
    id: string;
    name: string;
  };

  @ApiProperty({ description: 'Unique identifier for the certification' })
  deleted_at?: Date;

  @ApiProperty({ description: 'Unique identifier for the certification' })
  created_at: Date;

  @ApiProperty({ description: 'Unique identifier for the certification' })
  updated_at: Date;

  @ApiProperty({ description: 'Unique identifier for the certification' })
  tags: string[];

  @ApiProperty({
    type: Array,
    description: 'Unique identifier for the certification',
    example: [
      {
        id: 'variant_id',
        product_id: 'product_id',
        sku: 'sku',
        price: 100000,
        attributes: { size: 'M', colour: 'red' },
      },
    ],
  })
  variants: {
    id: string;
    sku: string;
    price: string;
    stock: string;
    attributes: {
      attributeName: string;
    };
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }[];
}
