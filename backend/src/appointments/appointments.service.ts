import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentsRepository: Repository<Appointment>,
  ) {}

  async findAll(): Promise<Appointment[]> {
    return this.appointmentsRepository.find({ relations: ['doctor'] });
  }

  async findOne(id: number): Promise<Appointment> {
    const appointment = await this.appointmentsRepository.findOne({
      where: { id },
      relations: ['doctor'],
    });
    if (!appointment) {
      throw new NotFoundException(`Appointment #${id} not found`);
    }
    return appointment;
  }

  async create(appointmentData: Partial<Appointment>): Promise<Appointment> {
    const appointment = this.appointmentsRepository.create(appointmentData);
    return this.appointmentsRepository.save(appointment);
  }

  async update(id: number, appointmentData: Partial<Appointment>): Promise<Appointment> {
    await this.appointmentsRepository.update(id, appointmentData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.appointmentsRepository.delete(id);
  }
} 