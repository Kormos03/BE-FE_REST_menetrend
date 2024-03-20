import { Injectable } from '@nestjs/common';
import { CreateJaratokDto } from './dto/create-jaratok.dto';
import { UpdateJaratokDto } from './dto/update-jaratok.dto';

@Injectable()
export class JaratokService {
  create(createJaratokDto: CreateJaratokDto) {
    return 'This action adds a new jaratok';
  }

  findAll() {
    return `This action returns all jaratok`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jaratok`;
  }

  update(id: number, updateJaratokDto: UpdateJaratokDto) {
    return `This action updates a #${id} jaratok`;
  }

  remove(id: number) {
    return `This action removes a #${id} jaratok`;
  }
}
