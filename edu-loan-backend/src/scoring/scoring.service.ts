import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from '../applications/dto/create-application.dto';

@Injectable()
export class ScoringService {
  calculateScore(dto: CreateApplicationDto) {
    let score = 0;
    const reasons: string[] = [];

    if (dto.academicScore >= 8) {
      score += 25;
      reasons.push('Strong academic performance');
    } else if (dto.academicScore >= 7) {
      score += 18;
    } else {
      score += 8;
    }

    if (dto.familyIncome >= 1500000) {
      score += 25;
      reasons.push('High family income');
    } else if (dto.familyIncome >= 800000) {
      score += 18;
    } else {
      score += 10;
    }

    const topUniversities = [
      'IIT',
      'NIT',
      'Stanford',
      'MIT',
      'Harvard',
    ];

    const isTopUniversity = topUniversities.some(
      (uni) => dto.universityName.includes(uni),
    );

    if (isTopUniversity) {
      score += 20;
      reasons.push('Top-ranked university');
    } else {
      score += 10;
    }

    if (dto.loanAmount < dto.familyIncome * 2) {
      score += 15;
    } else {
      score += 5;
    }

    if ((dto.existingLoans || 0) < 500000) {
      score += 15;
    } else {
      score += 5;
    }

    let category = 'LOW';

    if (score >= 75) {
      category = 'HIGH';
    } else if (score >= 45) {
      category = 'MEDIUM';
    }

    return {
      score,
      category,
      reasons,
    };
  }
}