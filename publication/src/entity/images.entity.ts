import { Column, Entity, ManyToOne, ObjectID, ObjectIdColumn } from 'typeorm';
import Publication from './publication.entity';

@Entity()
export default class Images {
  constructor(url: string) {
    this.url = url;
  }
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  url: string;

  @ManyToOne(() => Publication, (publication) => publication.images)
  publication: Publication;
}
