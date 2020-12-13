import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  Body,
} from '@nestjs/common';

import { AppService } from './app.service';
import PublicationDto from './dto/publication.dto';

@Controller('publication')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getPublication(@Param() param): string {
    return this.appService.getHello();
  }
  @Post()
  @HttpCode(204)
  create(@Body() publicationDto: PublicationDto) {
    this.appService
      .create(publicationDto)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  }
  @Put()
  update(): string {
    return '';
  }
  @Delete(':id')
  delete(@Param() param): string {
    return '';
  }
}
