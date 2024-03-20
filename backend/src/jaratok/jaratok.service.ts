import { Injectable } from '@nestjs/common';
import { CreateJaratokDto } from './dto/create-jaratok.dto';
import { UpdateJaratokDto } from './dto/update-jaratok.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JaratokService {
  constructor (private prisma: PrismaService) {}

  create(createJaratokDto: CreateJaratokDto) {
    return this.prisma.jaratok.create({
      data: {
        allomasok: createJaratokDto.allomasok,
        idopont: createJaratokDto.idopont
      }
    })
  }

  findAll() {
    return this.prisma.jaratok.findMany();
  }

  findOne(id: number) {
    return this.prisma.jaratok.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateJaratokDto: UpdateJaratokDto) {
    return this.prisma.jaratok.update({
      where: {
        id
      },
      data: {
        allomasok: updateJaratokDto.allomasok,
        idopont: updateJaratokDto.idopont
      }
    
    })
  }

  remove(id: number) {
    return this.prisma.jaratok.delete({
      where: {id}
    })
  }
}
