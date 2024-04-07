import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { EnrollmentDTO } from './dtos/enrollment.dto';

@ApiTags('Enrollment')
@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get()
  async getAll() {
    return await this.enrollmentService.findAll();
  }

  @Post()
  async create(@Body() data: EnrollmentDTO) {
    data.user = new Types.ObjectId(data.user);
    data.course = new Types.ObjectId(data.course);
    return await this.enrollmentService.create(data);
  }
}
