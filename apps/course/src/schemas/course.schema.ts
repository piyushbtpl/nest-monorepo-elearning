import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'apps/user/src/schemas/user.schema';
import mongoose, { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
  })
  description: string;

  @Prop({
    type: Number,
  })
  price: number;

  @Prop({
    type: Boolean,
  })
  hasCertification: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
