import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from '../applications/dto/create-application.dto';

@Injectable()
export class DeadLeadService {
  evaluate(dto: CreateApplicationDto) {
    const flags: string[] = [];

    const suspiciousPhones = [
      '9999999999',
      '1234567890',
      '0000000000',
    ];

    if (suspiciousPhones.includes(dto.phone)) {
      flags.push('Suspicious phone number');
    }

    if (
      dto.email.includes('test') ||
      dto.email.includes('fake')
    ) {
      flags.push('Suspicious email pattern');
    }

    if (
      dto.familyIncome < 300000 &&
      dto.loanAmount > 5000000
    ) {
      flags.push('Income-loan mismatch');
    }

    return {
      isDeadLead: flags.length > 0,
      flags,
    };
  }
}