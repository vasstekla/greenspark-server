import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [DatabaseModule, ProductsModule],
})
export class AppModule { }
