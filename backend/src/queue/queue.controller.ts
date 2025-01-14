import { Controller, Get, Post, Put, Body, Param, UseGuards } from '@nestjs/common';
import { QueueService } from './queue.service';
import { Queue } from './entities/queue.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('queue')
@UseGuards(JwtAuthGuard)
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Get()
  getCurrentQueue() {
    return this.queueService.getCurrentQueue();
  }

  @Post()
  addToQueue(@Body() patientData: { patientName: string; priority?: number }) {
    return this.queueService.addToQueue(patientData);
  }

  @Put(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() statusData: { status: 'WAITING' | 'WITH_DOCTOR' | 'COMPLETED' }
  ) {
    return this.queueService.updateStatus(+id, statusData.status);
  }
} 