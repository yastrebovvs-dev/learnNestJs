import { Test, TestingModule } from '@nestjs/testing';
import { Test4Service } from './test-4.service';

describe('Test4Service', () => {
  let service: Test4Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test4Service],
    }).compile();

    service = module.get<Test4Service>(Test4Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
