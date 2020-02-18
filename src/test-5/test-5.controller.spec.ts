import { Test, TestingModule } from '@nestjs/testing';
import { Test5Controller } from './test-5.controller';

describe('Test5 Controller', () => {
  let controller: Test5Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Test5Controller],
    }).compile();

    controller = module.get<Test5Controller>(Test5Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
