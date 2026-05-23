import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ScoringService } from '../scoring/scoring.service';
import { DeadLeadService } from '../dead-lead/dead-lead.service';

@Injectable()
export class ApplicationsService {
  constructor(
    private prisma: PrismaService,
    private scoringService: ScoringService,
    private deadLeadService: DeadLeadService,
  ) {}

async create(dto: CreateApplicationDto) {

  // Duplicate application check
  const existingApplication =
    await this.prisma.application.findUnique({
      where: {
        email: dto.email,
      },
    });

  if (existingApplication) {
    return {
      message:
        'Application already exists with this email',
    };
  }

  // Dead lead evaluation
  const deadLeadResult =
    this.deadLeadService.evaluate(dto);

  // Lead scoring
  const scoringResult =
    this.scoringService.calculateScore(dto);

  // Save application
  const application =
    await this.prisma.application.create({
      data: {
        ...dto,

        applicationStatus:
          deadLeadResult.isDeadLead
            ? 'NEEDS_VERIFICATION'
            : 'UNDER_REVIEW',

        leadScore: scoringResult.score,

        leadCategory:
          scoringResult.category as any,

        isDeadLead:
          deadLeadResult.isDeadLead,

        deadLeadReasons:
          deadLeadResult.flags,

        scoringReasons:
          scoringResult.reasons,
      },
    });

  return {
    applicationId: application.id,
    status: application.applicationStatus,
    leadScore: application.leadScore,
    leadCategory: application.leadCategory,
    isDeadLead: application.isDeadLead,
    scoringReasons:
      application.scoringReasons,
    deadLeadReasons:
      application.deadLeadReasons,
  };
}

  async findAll() {
  return this.prisma.application.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}

async findOne(id: string) {
  return this.prisma.application.findUnique({
    where: { id },
  });
}
}