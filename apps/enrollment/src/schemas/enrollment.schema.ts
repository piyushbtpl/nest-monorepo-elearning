import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Course } from 'apps/course/src/schemas/course.schema';
import { User } from 'apps/user/src/schemas/user.schema';
import mongoose, { HydratedDocument } from 'mongoose';

export type EnrollmentDocument = HydratedDocument<Enrollment>;

@Schema()
export class Enrollment {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
  course: Course;

  @Prop({
    type: Date,
  })
  startDate: Date;

  @Prop({
    type: Date,
  })
  endDate: Date;

  @Prop({
    type: Boolean,
    default: true,
  })
  hasEnrolled: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  hasPaid: boolean;
}

export const EnrollmentSchema = SchemaFactory.createForClass(Enrollment);
