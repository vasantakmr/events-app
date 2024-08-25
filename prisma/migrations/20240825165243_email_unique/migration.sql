/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Event` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Event_email_key" ON "Event"("email");
