import { Module } from '@nestjs/common';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';
import { DatabaseModule } from '@app/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LessonsController],
  providers: [LessonsService],
})
export class LessonsModule {}
