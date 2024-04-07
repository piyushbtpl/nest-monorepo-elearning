import { Body, Controller, Get, Post } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { Types } from 'mongoose';
import { LessonsDTO } from './dtos/lessons.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Lessons')
@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get()
  async getAll() {
    return await this.lessonsService.findAll();
  }

  @Post()
  async create(@Body() data: LessonsDTO) {
    data.createdBy = new Types.ObjectId(data.createdBy);
    data.course = new Types.ObjectId(data.course);
    return await this.lessonsService.create(data);
  }
}
