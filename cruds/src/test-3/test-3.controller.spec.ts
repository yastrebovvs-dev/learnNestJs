import { Test, TestingModule } from '@nestjs/testing';
import { Test3Controller } from './test-3.controller';

describe('Test3 Controller', () => {
  let controller: Test3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Test3Controller],
    }).compile();

    controller = module.get<Test3Controller>(Test3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
