import { Module } from '@nestjs/common';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';
import { DatabaseModule } from '@app/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Lessons, LessonsSchema } from './schemas/lessons.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: Lessons.name, schema: LessonsSchema }]),
  ],
  controllers: [LessonsController],
  providers: [LessonsService],
})
export class LessonsModule {}
