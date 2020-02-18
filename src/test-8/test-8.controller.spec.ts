import { Test, TestingModule } from '@nestjs/testing';
import { Test8Controller } from './test-8.controller';

describe('Test8 Controller', () => {
  let controller: Test8Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Test8Controller],
    }).compile();

    controller = module.get<Test8Controller>(Test8Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
