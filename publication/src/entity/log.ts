import { Column } from 'typeorm';

export default class Log {
  @Column({ default: Date.now })
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  publishedAt: Date;

  @Column({ nullable: false })
  author: string;
}
