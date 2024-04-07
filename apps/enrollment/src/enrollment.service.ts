import { Inject, Injectable } from '@nestjs/common';
import { Course } from 'apps/course/src/schemas/course.schema';
import { User } from 'apps/user/src/schemas/user.schema';
import { Model } from 'mongoose';
import { EnrollmentDTO } from './dtos/enrollment.dto';
import { Enrollment } from './schemas/enrollment.schema';
import { ENROLLEMENT_MODEL } from '@app/database/db.constant';

@Injectable()
export class EnrollmentService {
  constructor(
    @Inject(ENROLLEMENT_MODEL) private enrollmentModel: Model<Enrollment>,
  ) {}

  async create(createDto: EnrollmentDTO): Promise<Enrollment> {
    const created = new this.enrollmentModel(createDto);
    const newRes = await created.save();

    const res = await newRes.populate([
      {
        path: 'user',
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

  async findAll(): Promise<Enrollment[]> {
    return this.enrollmentModel
      .find()
      .populate([
        {
          path: 'user',
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
