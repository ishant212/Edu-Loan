import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';

@Controller('applications')
export class ApplicationsController {
  constructor(
    private readonly applicationsService: ApplicationsService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateApplicationDto,
  ) {
    return this.applicationsService.create(dto);
  }

  @Get()
findAll() {
  return this.applicationsService.findAll();
}

@Get(':id')
findOne(
  @Param('id') id: string,
) {
  return this.applicationsService.findOne(id);
}
}