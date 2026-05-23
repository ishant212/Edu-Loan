import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { ScoringModule } from '../scoring/scoring.module';
import { DeadLeadModule } from '../dead-lead/dead-lead.module';

@Module({
  imports: [ScoringModule, DeadLeadModule],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}