// import slugify from '../helper/slugify';
import {
  BeforeInsert,
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
} from 'typeorm';
import Categorie from './categorie.entity';
import { Etat } from './etat';
import Images from './images.entity';
import Log from './log';
import slugify from '../helper/slugify';

@Entity()
export default class Publication {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ length: 100, nullable: false })
  titre: string;

  @BeforeInsert()
  updateDates() {
    this.slug = slugify(this.titre);
  }

  @Column()
  slug: string;

  @Column({ nullable: false })
  prix: number;

  @Column({ nullable: false })
  description: string;

  @Column({ type: 'set', enum: Etat })
  etat: Etat;

  @Column(() => Categorie)
  categorie?: Categorie;

  @Column({ nullable: false })
  ville: string;

  @OneToMany((type) => Images, (images) => images.publication)
  images: Images[];

  @Column({ default: false })
  isActive: boolean;

  @Column(() => Log)
  state: Log;
}
