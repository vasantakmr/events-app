-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "eventlocation" DROP NOT NULL,
ALTER COLUMN "startTime" DROP NOT NULL,
ALTER COLUMN "endTime" DROP NOT NULL,
ALTER COLUMN "userCapacity" DROP NOT NULL,
ALTER COLUMN "eventType" DROP NOT NULL;
