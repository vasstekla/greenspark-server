import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ProductSchema } from './products/entities/product.entity';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017', { dbName: 'productdb', useNewUrlParser: true, useUnifiedTopology: true }),
  MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
