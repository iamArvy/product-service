import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsObject, IsString } from 'class-validator';

@InputType()
export class CreateVariantInput {
  @ApiProperty({ description: 'Name of the product' })
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  sku: string;

  @ApiProperty({ description: 'Name of the product' })
  @IsInt()
  @IsNotEmpty()
  @Field(() => Int)
  price: number;

  @ApiProperty({ description: 'Name of the product' })
  @IsInt()
  @IsNotEmpty()
  @Field(() => Int)
  stock: number;

  @ApiProperty({ description: 'Name of the product' })
  @IsObject()
  @IsNotEmpty()
  @Field(() => Object)
  attributes: Record<string, string>;
}

@InputType()
export class UpdateVariantInput extends PartialType(CreateVariantInput) {}
