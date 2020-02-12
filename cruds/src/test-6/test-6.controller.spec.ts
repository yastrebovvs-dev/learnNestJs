import { Test, TestingModule } from '@nestjs/testing';
import { Test6Controller } from './test-6.controller';

describe('Test6 Controller', () => {
  let controller: Test6Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Test6Controller],
    }).compile();

    controller = module.get<Test6Controller>(Test6Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
