import { Module } from '@nestjs/common';
import { JaratokService } from './jaratok.service';
import { JaratokController } from './jaratok.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [JaratokController],
  providers: [JaratokService, PrismaService],
})
export class JaratokModule {}
