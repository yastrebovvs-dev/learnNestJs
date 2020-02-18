import { Test, TestingModule } from '@nestjs/testing';
import { Test8Service } from './test-8.service';

describe('Test8Service', () => {
  let service: Test8Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test8Service],
    }).compile();

    service = module.get<Test8Service>(Test8Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
