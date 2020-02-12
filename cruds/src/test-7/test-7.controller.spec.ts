import { Test, TestingModule } from '@nestjs/testing';
import { Test7Controller } from './test-7.controller';

describe('Test7 Controller', () => {
  let controller: Test7Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Test7Controller],
    }).compile();

    controller = module.get<Test7Controller>(Test7Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
