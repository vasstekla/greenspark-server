import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Put('product/:id')
  async updateProduct(@Res() response, @Param('id') productId: number,
    @Body() updateProductDto: UpdateProductDto) {
    try {
      const oldProduct = await this.productsService.updateProduct(productId, updateProductDto);
      return response.status(HttpStatus.OK).json({
        message: 'Product successfully updated',
        oldProduct,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('products')
  async getProducts(@Res() response) {
    try {
      const products = await this.productsService.getAllProducts();
      return response.status(HttpStatus.OK).json({
        message: 'Returning products successfully', products,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
