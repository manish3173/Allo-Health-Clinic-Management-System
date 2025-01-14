import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Doctor } from '../../doctors/entities/doctor.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientName: string;

  @ManyToOne(() => Doctor, doctor => doctor.appointments)
  doctor: Doctor;

  @Column()
  dateTime: Date;

  @Column()
  status: 'BOOKED' | 'COMPLETED' | 'CANCELLED';
} 