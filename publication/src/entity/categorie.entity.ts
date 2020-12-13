import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity()
@Tree('materialized-path')
export default class Categorie {
  constructor(name: string) {
    this.name = name;
  }

  @ObjectIdColumn()
  id: ObjectID;

  @Column({ length: 20 })
  name: string;

  @TreeChildren()
  children: Categorie[];

  @TreeParent()
  parent: Categorie;
}
