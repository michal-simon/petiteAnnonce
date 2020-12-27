import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppService } from './app.service';
import PublicationDto from './dto/create.publication.dto';
import Images from './entity/images.entity';
import Publication from './entity/publication.entity';
import { MockType, publicationMock } from './mocks/publication.mock';

describe('publication service', () => {
  let service: AppService;
  let repositoryMock: MockType<Repository<Publication>>;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: getRepositoryToken(Publication),
          useFactory: publicationMock,
        },
      ],
    }).compile();

    service = app.get<AppService>(AppService);
    repositoryMock = app.get(getRepositoryToken(Publication));
  });

  describe('test publication service', () => {
    it('should create new publication', async () => {
      const newPublication = {
        categorie: undefined,
        description: 'peugeot 505',
        etat: 'bon état',
        images: { url: 'http://via.placeholder.com/640x360' },
        titre: 'Voiture',
        ville: 'paris',
      };
      jest
        .spyOn(service, 'create')
        .mockImplementation(jest.fn().mockResolvedValueOnce(newPublication));
      const saved = await service.create(
        new PublicationDto(
          'Voiture',
          'paris',
          undefined,
          'peugeot 505s',
          undefined,
          new Images('http://via.placeholder.com/640x360'),
        ),
      );
      expect(saved).toEqual(newPublication);
    });
  });
});
