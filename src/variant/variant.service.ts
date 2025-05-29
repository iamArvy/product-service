import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVariantInput, UpdateVariantInput } from './dto';

@Injectable()
export class VariantService {
  constructor(private prisma: PrismaService) {}

  createVariant(data: CreateVariantInput) {
    return this.prisma.variant.create({ data });
  }

  async getVariants() {
    return await this.prisma.variant.findMany();
  }

  async getVariant(id: string) {
    return await this.prisma.variant.findUnique({ where: { id } });
  }

  async updateVariant(id: string, data: UpdateVariantInput) {
    return await this.prisma.variant.update({ where: { id }, data });
  }

  async deleteVariant(id: string) {
    return await this.prisma.variant.delete({ where: { id } });
  }
}
