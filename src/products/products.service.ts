import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProduct } from './product.interface';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private productModel: Model<IProduct>) { }

  async updateProduct(productId: number, updateProductDto: UpdateProductDto): Promise<IProduct> {
    const oldProduct =
      await this.productModel.findByIdAndUpdate(productId, updateProductDto, { new: true });
    if (!oldProduct) {
      throw new NotFoundException(`Product (id:${productId}) not found`);
    }
    return oldProduct;
  }
  async getAllProducts(): Promise<IProduct[]> {
    const products = await this.productModel.find();
    return products;
  }
}
