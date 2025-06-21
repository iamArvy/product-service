import {
  CreateProductInput,
  ListProductInput,
  UpdateProductInput,
  ListProductByRelationInput,
  IdInput,
} from 'src/dto';
import { GrpcMethod } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { ProductService } from 'src/service/product/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @GrpcMethod('ProductService')
  create({ store_id, data, variants }: CreateProductInput) {
    return this.service.create(store_id, data, variants);
  }

  @GrpcMethod('ProductService')
  get({ id }: IdInput) {
    return this.service.get(id);
  }

  @GrpcMethod('ProductService')
  getStoreProducts({ id, data }: ListProductByRelationInput) {
    return this.service.listStoreProducts(id, data);
  }

  @GrpcMethod('ProductService')
  getCategoryProducts({ id, data }: ListProductByRelationInput) {
    return this.service.listProductsByCategory(id, data);
  }

  @GrpcMethod('ProductService')
  list(data: ListProductInput) {
    return this.service.listProducts(data);
  }

  @GrpcMethod('ProductService')
  update({ id, data }: UpdateProductInput) {
    return this.service.update(id, data);
  }

  @GrpcMethod('ProductService')
  delete({ id }: IdInput) {
    return this.service.delete(id);
  }
}
