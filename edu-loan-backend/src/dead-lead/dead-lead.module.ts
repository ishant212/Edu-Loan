import { Module } from '@nestjs/common';
import { DeadLeadService } from './dead-lead.service';

@Module({
  providers: [DeadLeadService],
  exports: [DeadLeadService],
})
export class DeadLeadModule {}