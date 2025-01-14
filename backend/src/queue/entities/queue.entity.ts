import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Queue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientName: string;

  @Column()
  queueNumber: number;

  @Column({ default: 0 })
  priority: number;

  @Column()
  status: 'WAITING' | 'WITH_DOCTOR' | 'COMPLETED';

  @Column()
  createdAt: Date;
} 