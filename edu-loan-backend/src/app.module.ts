import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { ApplicationsModule } from './applications/applications.module';
import { ScoringModule } from './scoring/scoring.module';
import { DeadLeadModule } from './dead-lead/dead-lead.module';

@Module({
  imports: [
    PrismaModule,
    ApplicationsModule,
    ScoringModule,
    DeadLeadModule,
  ],
})
export class AppModule {}