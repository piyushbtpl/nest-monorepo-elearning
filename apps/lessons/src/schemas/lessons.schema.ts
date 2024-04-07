import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Course } from 'apps/course/src/schemas/course.schema';
import { User } from 'apps/user/src/schemas/user.schema';
import mongoose, { HydratedDocument } from 'mongoose';

export type LessonsDocument = HydratedDocument<Lessons>;

@Schema()
export class Lessons {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
  })
  content: string;

  @Prop({
    type: String,
  })
  category: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
  course: Course;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;
}

export const LessonsSchema = SchemaFactory.createForClass(Lessons);
