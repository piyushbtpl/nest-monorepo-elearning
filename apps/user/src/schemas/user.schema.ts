import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  email: string;

  @Prop({
    type: String,
  })
  password: string; // should be in encrypted format

  @Prop({
    type: String,
  })
  role: string; // user, student, teacher, admin
}

export const UserSchema = SchemaFactory.createForClass(User);
