import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class EnrollmentDTO {
  @ApiProperty({ default: null })
  user: Types.ObjectId;

  @ApiProperty({ default: null })
  course: Types.ObjectId;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  hasEnrolled: boolean;

  @ApiProperty()
  hasPaid: boolean;
}
