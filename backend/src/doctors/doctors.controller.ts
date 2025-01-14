import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { Doctor } from './entities/doctor.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('doctors')
@UseGuards(JwtAuthGuard)
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Get()
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOne(id);
  }

  @Post()
  create(@Body() createDoctorDto: Partial<Doctor>) {
    return this.doctorsService.create(createDoctorDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDoctorDto: Partial<Doctor>) {
    return this.doctorsService.update(+id, updateDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorsService.remove(+id);
  }
} 