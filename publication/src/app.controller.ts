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
import { validate } from 'class-validator';

import { AppService } from './app.service';
import PublicationDto from './dto/create.publication.dto';

@Controller('publication')
export class AppController {
  constructor(public appService: AppService) {}

  @Get()
  getPublication(): string {
    return this.appService.getHello();
  }
  @Post()
  @HttpCode(204)
  create(@Body() publicationDto: PublicationDto) {
    validate(publicationDto).then((errors) => {
      console.log(errors);
    });

    this.appService
      .create(publicationDto)
      .then((res) => {
        console.log('controller called', res);
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
    return param;
  }
}
