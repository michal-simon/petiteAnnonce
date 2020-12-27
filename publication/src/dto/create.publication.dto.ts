import {
  IsAlphanumeric,
  IsIn,
  IsNotEmpty,
  IsNumber,
  Length,
} from 'class-validator';
import Categorie from '../entity/categorie.entity';
import { Etat } from '../entity/etat';
import Images from '../entity/images.entity';

export default class PublicationDto {
  constructor(titre, ville, etat = Etat.BON, description, categorie, images){
    this.categorie = categorie;
    this.description = description;
    this.etat = etat;
    this.images = images;
    this.titre = titre;
    this.ville = ville;
  }

  @IsNotEmpty({
    message: 'Le $property ne doit pas être vide',
  })
  @Length(5, 20, {
    message:
      'Le $property doit être au minimum 5 caractéres et 20 caractéres maximum',
  })
  titre: string;

  @IsNumber(
    { allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 },
    {
      message: 'Le $property doit étre un chiffre',
    },
  )
  @IsNotEmpty({
    message: 'Le $property ne doit pas être vide',
  })
  prix: number;

  @IsNotEmpty({
    message: 'La $property ne doit pas être vide',
  })
  description: string;

  @IsNotEmpty({
    message: "L'état ne doit pas être vide",
  })
  @IsIn([Etat.BON, Etat.EXELLENT, Etat.NEUF], {
    message: "l'état ne doit contenur qu'une de ces valeurs : $constraint1",
  })
  etat: Etat;

  @IsNotEmpty({
    message: 'La $property ne doit pas être vide',
  })
  categorie: Categorie;

  @IsNotEmpty({
    message: 'La $property ne doit pas être vide',
  })
  ville: string;

  @IsNotEmpty({
    message: 'La $property ne doit pas être vide',
  })
  images: Images[];
}
