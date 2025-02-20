import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'clarivate-shared-orm';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [
    DatabaseModule,
    CategoryModule,
    TypeOrmModule.forFeature([Product])
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}