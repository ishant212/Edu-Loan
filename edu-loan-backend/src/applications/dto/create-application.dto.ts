import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsString()
  @IsNotEmpty()
  educationLevel: string;

  @IsString()
  @IsNotEmpty()
  targetCourse: string;

  @IsString()
  @IsNotEmpty()
  universityName: string;

  @IsOptional()
  @IsString()
  studyCountry?: string;

  @IsNumber()
  @Min(0)
  @Max(10)
  academicScore: number;

  @IsNumber()
  @Min(0)
  familyIncome: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  existingLoans?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  coapplicantIncome?: number;

  @IsNumber()
  @Min(10000)
  loanAmount: number;

  @IsOptional()
  @IsNumber()
  loanDuration?: number;
}