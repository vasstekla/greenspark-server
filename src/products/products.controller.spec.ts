import { getMockReq, getMockRes } from '@jest-mock/express'
import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database.module';
import { ProductsController } from './products.controller';
import { ProductsModule } from './products.module';
import { ProductsService } from './products.service';
import { createMocks as _createMocks } from 'node-mocks-http';
import type { RequestOptions, ResponseOptions } from 'node-mocks-http';

const createMocks = _createMocks as (
  reqOptions?: RequestOptions,
  resOptions?: ResponseOptions,
  // @ts-ignore: Fixing this: https://github.com/howardabrams/node-mocks-http/issues/245
) => Mocks<NextApiRequest, NextApiResponse>;

const { req, res } = createMocks({
  method: 'GET',
});

describe('ProductsController', () => {
  let controller: ProductsController;
  let spyOnGetAllProducts: any;
  let spyOnUpdateProduct: any;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, ProductsModule],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);

    spyOnGetAllProducts = jest.fn();
    spyOnGetAllProducts = jest.spyOn(ProductsService.prototype, 'getAllProducts');

    spyOnUpdateProduct = jest.fn();
    spyOnUpdateProduct = jest.spyOn(ProductsService.prototype, 'updateProduct');
  });

  it("calling getProducts method", () => {
    controller.getProducts(res);
    expect(spyOnGetAllProducts).toHaveBeenCalled();
  })

  it("calling updateProduct method", () => {
    controller.updateProduct(res, 1, {
      type: '',
      amount: 0,
      action: '',
      active: false,
      linked: false,
      selectedColor: ''
    });
    expect(spyOnUpdateProduct).toHaveBeenCalled();
  })
});
