import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CourseDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  hasCertification: boolean;
  @ApiProperty({ default: null })
  createdBy: Types.ObjectId;
}
