import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserDTO } from './dtos/user.dto';
import { User } from './schemas/user.schema';
import { USER_MODEL } from '@app/database/db.constant';

@Injectable()
export class UserService {
  constructor(@Inject(USER_MODEL) private userModel: Model<User>) {}

  async create(createDto: UserDTO): Promise<User> {
    const created = new this.userModel(createDto);
    return created.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
