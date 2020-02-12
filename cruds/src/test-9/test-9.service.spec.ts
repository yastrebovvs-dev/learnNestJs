import { Test, TestingModule } from '@nestjs/testing';
import { Test9Service } from './test-9.service';

describe('Test9Service', () => {
  let service: Test9Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test9Service],
    }).compile();

    service = module.get<Test9Service>(Test9Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
