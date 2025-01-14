import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['STAFF', 'ADMIN'],
    default: 'STAFF'
  })
  role: 'STAFF' | 'ADMIN';
} 