import { Test, TestingModule } from '@nestjs/testing';
import { JaratokService } from './jaratok.service';

describe('JaratokService', () => {
  let service: JaratokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JaratokService],
    }).compile();

    service = module.get<JaratokService>(JaratokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
