import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import ormConfig from './config/typeorm.config';
import Images from './entity/images.entity';
import Categorie from './entity/categorie.entity';
import Publication from './entity/publication.entity';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    TypeOrmModule.forFeature([Publication, Categorie, Images]),
  ],
  exports: [TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
