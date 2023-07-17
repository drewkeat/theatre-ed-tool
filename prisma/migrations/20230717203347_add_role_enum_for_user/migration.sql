-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Initial', 'Intermediate', 'Admin');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Initial';
