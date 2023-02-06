import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Put(':id')
  async updateProduct(@Res() response, @Param('id') productId: number,
    @Body() updateProductDto: UpdateProductDto) {
    try {
      const product = await this.productsService.updateProduct(productId, updateProductDto);
      return response.status(HttpStatus.OK).json({
        message: 'Product successfully updated',
        product,
      });
    } catch (err) {
      return response.status(err.status);
    }
  }
  @Get()
  async getProducts(@Res() response: Response) {
    try {
      const products = await this.productsService.getAllProducts();
      return response.status(HttpStatus.OK).json({
        message: 'Returning products successfully', products,
      });
    } catch (err) {
      return response.status(err.status);
    }
  }
}
