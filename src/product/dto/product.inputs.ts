import { Field, InputType, PartialType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsObject,
  IsString,
} from 'class-validator';

@InputType()
export class CreateProductInput {
  @ApiProperty({ description: 'Name of the product' })
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Name of the product' })
  @Field(() => String)
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Name of the product' })
  @Field(() => String)
  category_id: string;

  @ApiProperty({ description: 'Name of the product' })
  @IsArray()
  @IsNotEmpty()
  @Field(() => [String])
  tags: string[];

  @ApiProperty({ description: 'Name of the product' })
  @IsString()
  @IsNotEmpty()
  sku: string;

  @ApiProperty({ description: 'Name of the product' })
  @IsInt()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ description: 'Name of the product' })
  @IsInt()
  @IsNotEmpty()
  stock: number;

  @ApiProperty({ description: 'Name of the product' })
  @IsObject()
  @IsNotEmpty()
  attributes: Record<string, string>;
}

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}
