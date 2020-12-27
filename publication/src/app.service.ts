import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Publication from './entity/publication.entity';
import PublicationDto from './dto/create.publication.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  /**
   * Trouver une publication
   * @param id
   */
  findOne(id: string): Promise<Publication> {
    return this.publicationRepository.findOne({
      where: {
        id,
      },
    });
  }

  /**
   * Trouver toutes les annonces
   */
  findAll(): Promise<Publication[]> {
    return this.publicationRepository.find();
  }

  /**
   * Cherche dans les annonce
   * @param titre
   */
  search(titre: string): Promise<Publication[]> {
    return this.publicationRepository.find({
      where: {
        titre,
      },
    });
  }

  /**
   * Creer une nouvelle publication
   * @param PublicationDto
   */
  create(pub: PublicationDto): Promise<Publication> {
    return this.publicationRepository.save(pub);
  }

  /**
   * Mettre à jour une publication
   * @param Publication
   */
  update(update: Publication): Promise<Publication> {
    return this.publicationRepository.save(update);
  }

  /**
   * Supprimer une publication
   * @param id
   */
  async delete(id: string): Promise<void> {
    await this.publicationRepository.delete(id);
  }
}
