import { Test, TestingModule } from '@nestjs/testing';
import { Test7Service } from './test-7.service';

describe('Test7Service', () => {
  let service: Test7Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test7Service],
    }).compile();

    service = module.get<Test7Service>(Test7Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
