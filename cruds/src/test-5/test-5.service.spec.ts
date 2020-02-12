import { Test, TestingModule } from '@nestjs/testing';
import { Test5Service } from './test-5.service';

describe('Test5Service', () => {
  let service: Test5Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test5Service],
    }).compile();

    service = module.get<Test5Service>(Test5Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
