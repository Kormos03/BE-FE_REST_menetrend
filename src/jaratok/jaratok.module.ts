import { Module } from '@nestjs/common';
import { JaratokService } from './jaratok.service';
import { JaratokController } from './jaratok.controller';

@Module({
  controllers: [JaratokController],
  providers: [JaratokService],
})
export class JaratokModule {}
