import { PartialType } from '@nestjs/mapped-types';
import { CreateJaratokDto } from './create-jaratok.dto';

export class UpdateJaratokDto extends PartialType(CreateJaratokDto) {}
