import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { JaratokModule } from './jaratok/jaratok.module';

@Module({
  imports: [JaratokModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
