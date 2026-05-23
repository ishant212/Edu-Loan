-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('PENDING', 'UNDER_REVIEW', 'ELIGIBLE', 'REJECTED', 'NEEDS_VERIFICATION');

-- CreateEnum
CREATE TYPE "LeadCategory" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dob" TIMESTAMP(3),
    "city" TEXT,
    "educationLevel" TEXT NOT NULL,
    "targetCourse" TEXT NOT NULL,
    "universityName" TEXT NOT NULL,
    "studyCountry" TEXT,
    "academicScore" DOUBLE PRECISION NOT NULL,
    "tuitionFees" DOUBLE PRECISION,
    "familyIncome" DOUBLE PRECISION NOT NULL,
    "existingLoans" DOUBLE PRECISION DEFAULT 0,
    "coapplicantIncome" DOUBLE PRECISION,
    "loanAmount" DOUBLE PRECISION NOT NULL,
    "loanDuration" INTEGER,
    "applicationStatus" "ApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "leadScore" INTEGER,
    "leadCategory" "LeadCategory",
    "isDeadLead" BOOLEAN NOT NULL DEFAULT false,
    "deadLeadReasons" TEXT[],
    "scoringReasons" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Application_email_key" ON "Application"("email");
