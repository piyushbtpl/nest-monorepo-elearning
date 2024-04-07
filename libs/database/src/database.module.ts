import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
  // imports: [
  //   MongooseModule.forRoot(
  //     'mongodb://admin:password@mongodb:27017/eLearning?authSource=admin',
  //   ),
  // ],
  // providers: [DatabaseService],
  // exports: [DatabaseService],
})
export class DatabaseModule {}
