import { Inject, Injectable } from '@nestjs/common';
import { Course } from 'apps/course/src/schemas/course.schema';
import { User } from 'apps/user/src/schemas/user.schema';
import { Model } from 'mongoose';
import { LessonsDTO } from './dtos/lessons.dto';
import { Lessons } from './schemas/lessons.schema';
import { LESSONS_MODEL } from '@app/database/db.constant';

@Injectable()
export class LessonsService {
  constructor(@Inject(LESSONS_MODEL) private lessonModel: Model<Lessons>) {}

  async create(createDto: LessonsDTO): Promise<Lessons> {
    const created = new this.lessonModel(createDto);
    const newRes = await created.save();

    const res = await newRes.populate([
      {
        path: 'createdBy',
        model: User.name,
        select: '_id name',
        strictPopulate: false,
      },
      {
        path: 'course',
        model: Course.name,
        select: '_id name description price hasCertification',
        strictPopulate: false,
      },
    ]);

    return res;
  }

  async findAll(): Promise<Lessons[]> {
    return this.lessonModel
      .find()
      .populate([
        {
          path: 'createdBy',
          model: User.name,
          select: '_id name',
          strictPopulate: false,
        },
        {
          path: 'course',
          model: Course.name,
          select: '_id name description price hasCertification',
          strictPopulate: false,
        },
      ])
      .exec();
  }
}
