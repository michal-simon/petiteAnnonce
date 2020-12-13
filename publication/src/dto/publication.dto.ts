import {
  IsAlphanumeric,
  IsIn,
  IsNotEmpty,
  IsNumber,
  Length,
} from 'class-validator';
import Categorie from 'src/entity/categorie.entity';
import { Etat } from 'src/entity/etat';
import Images from 'src/entity/images.entity';

export default class PublicationDto {
  @IsNotEmpty()
  @Length(5, 20)
  @IsAlphanumeric()
  titre: string;

  @IsNumber()
  @IsNotEmpty()
  prix: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsIn([Etat.BON, Etat.EXELLENT, Etat.NEUF])
  etat: Etat;

  @IsNotEmpty()
  categorie: Categorie;

  @IsNotEmpty()
  ville: string;

  @IsNotEmpty()
  images: Images[];
}
