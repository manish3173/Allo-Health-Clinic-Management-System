import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Appointment } from '../../appointments/entities/appointment.entity';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  specialty: string;

  @Column()
  availability: boolean;

  @OneToMany(() => Appointment, appointment => appointment.doctor)
  appointments: Appointment[];
} 