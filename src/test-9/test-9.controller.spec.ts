import { Test, TestingModule } from '@nestjs/testing';
import { Test9Controller } from './test-9.controller';

describe('Test9 Controller', () => {
  let controller: Test9Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Test9Controller],
    }).compile();

    controller = module.get<Test9Controller>(Test9Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
