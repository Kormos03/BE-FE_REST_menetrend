import { Test, TestingModule } from '@nestjs/testing';
import { JaratokController } from './jaratok.controller';
import { JaratokService } from './jaratok.service';

describe('JaratokController', () => {
  let controller: JaratokController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JaratokController],
      providers: [JaratokService],
    }).compile();

    controller = module.get<JaratokController>(JaratokController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
