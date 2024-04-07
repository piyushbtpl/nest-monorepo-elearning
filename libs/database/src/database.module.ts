import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongodb:27017/eLearning')], // mongodb://admin:password@localhost:28018/eLearning?authSource=admin
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
