-- AlterTable
ALTER TABLE "user" ADD COLUMN     "passwordResetExpires" TEXT,
ADD COLUMN     "passwordResetToken" TEXT;
