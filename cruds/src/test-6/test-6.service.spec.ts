import { Test, TestingModule } from '@nestjs/testing';
import { Test6Service } from './test-6.service';

describe('Test6Service', () => {
  let service: Test6Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test6Service],
    }).compile();

    service = module.get<Test6Service>(Test6Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
