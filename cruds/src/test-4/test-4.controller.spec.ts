import { Test, TestingModule } from '@nestjs/testing';
import { Test4Controller } from './test-4.controller';

describe('Test4 Controller', () => {
  let controller: Test4Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Test4Controller],
    }).compile();

    controller = module.get<Test4Controller>(Test4Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
