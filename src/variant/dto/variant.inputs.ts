import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsObject, IsString } from 'class-validator';

@InputType()
export class CreateVariantInput {
  @ApiProperty({ description: 'ID of the Product' })
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  product_id: string;

  @ApiProperty({ description: 'SKU of the variant', example: 'SKU-0001' })
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  sku: string;

  @ApiProperty({ description: 'Price of the variant' })
  @IsInt()
  @IsNotEmpty()
  @Field(() => Int)
  price: number;

  @ApiProperty({ description: 'Stock of the Variant' })
  @IsInt()
  @IsNotEmpty()
  @Field(() => Int)
  stock: number;

  @ApiProperty({
    type: Object,
    description: 'Attributes of the variant',
    example: { size: 'M', color: 'red' },
  })
  @IsObject()
  @IsNotEmpty()
  @Field(() => Object, {
    description: 'Attributes of the variant',
  })
  attributes: Record<string, string>;
}

@InputType()
export class UpdateVariantInput extends PartialType(CreateVariantInput) {}
