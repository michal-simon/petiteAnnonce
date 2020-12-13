import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Publication from './entity/publication.entity';
import publicationDto from './dto/publication.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  findOne(id: string): Promise<Publication> {
    return this.publicationRepository.findOne({
      where: {
        id,
      },
    });
  }
  findAll(): Promise<Publication[]> {
    return this.publicationRepository.find();
  }
  search(titre: string): Promise<Publication[]> {
    return this.publicationRepository.find({
      where: {
        titre,
      },
    });
  }
  create(pub: publicationDto): Promise<Publication> {
    return this.publicationRepository.save(pub);
  }
  update(update: Publication): Promise<Publication> {
    return this.publicationRepository.save(update);
  }
  async delete(id: string): Promise<void> {
    await this.publicationRepository.delete(id);
  }
}
