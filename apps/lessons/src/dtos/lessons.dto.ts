import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class LessonsDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  category: string;
  @ApiProperty({ default: null })
  course: Types.ObjectId;
  @ApiProperty({ default: null })
  createdBy: Types.ObjectId;
}
