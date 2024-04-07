import {
  Enrollment,
  EnrollmentSchema,
} from './../../../apps/enrollment/src/schemas/enrollment.schema';
import {
  Lessons,
  LessonsSchema,
} from './../../../apps/lessons/src/schemas/lessons.schema';
import {
  Course,
  CourseSchema,
} from './../../../apps/course/src/schemas/course.schema';
import { User, UserSchema } from 'apps/user/src/schemas/user.schema';
import {
  COURSE_MODEL,
  EL_DATABASE_CONNECTION,
  ENROLLEMENT_MODEL,
  LESSONS_MODEL,
  USER_MODEL,
} from './db.constant';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: EL_DATABASE_CONNECTION,
    useFactory: async (): Promise<typeof import('mongoose')> => {
      try {
        const connection = await mongoose.connect(
          'mongodb://admin:password@mongodb:27017/eLearning?authSource=admin',
        );
        console.log(`Mongodb connected.!`);
        return connection;
      } catch (error) {
        console.log(`Failed to connect to the MongoDB due to: ${error}`);
      }
    },
  },
  {
    provide: USER_MODEL,
    useFactory: (connection: mongoose.Connection) =>
      connection?.model(User.name, UserSchema),
    inject: [EL_DATABASE_CONNECTION],
  },
  {
    provide: COURSE_MODEL,
    useFactory: (connection: mongoose.Connection) =>
      connection?.model(Course.name, CourseSchema),
    inject: [EL_DATABASE_CONNECTION],
  },
  {
    provide: LESSONS_MODEL,
    useFactory: (connection: mongoose.Connection) =>
      connection?.model(Lessons.name, LessonsSchema),
    inject: [EL_DATABASE_CONNECTION],
  },
  {
    provide: ENROLLEMENT_MODEL,
    useFactory: (connection: mongoose.Connection) =>
      connection?.model(Enrollment.name, EnrollmentSchema),
    inject: [EL_DATABASE_CONNECTION],
  },
];
