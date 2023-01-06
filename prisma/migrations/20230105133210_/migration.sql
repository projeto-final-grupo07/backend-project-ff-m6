/*
  Warnings:

  - The `passwordResetExpires` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "passwordResetExpires",
ADD COLUMN     "passwordResetExpires" TIMESTAMP(3);
