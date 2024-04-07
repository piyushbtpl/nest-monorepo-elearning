import { Inject, Injectable } from '@nestjs/common';
import { User } from 'apps/user/src/schemas/user.schema';
import { Model } from 'mongoose';
import { CourseDTO } from './dtos/course.dto';
import { Course } from './schemas/course.schema';
import { COURSE_MODEL } from '@app/database/db.constant';

@Injectable()
export class CourseService {
  constructor(@Inject(COURSE_MODEL) private courseModel: Model<Course>) {}

  async create(createDto: CourseDTO): Promise<Course> {
    const created = new this.courseModel(createDto);
    const newRes = await created.save();

    const res = await newRes.populate([
      {
        path: 'createdBy',
        model: User.name,
        select: '_id name',
        strictPopulate: false,
      },
    ]);

    return res;
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel
      .find()
      .populate([
        {
          path: 'createdBy',
          model: User.name,
          select: '_id name',
          strictPopulate: false,
        },
      ])
      .exec();
  }
}
