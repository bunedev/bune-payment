/*
  Warnings:

  - The `status` column on the `Payment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `currency` column on the `Payment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `refundStatus` column on the `Payment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `type` column on the `Payment` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "RefundStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'CANCELED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED', 'REFUNDED', 'CANCELED', 'PROCESSING', 'EXPIRED', 'HOLD', 'PARTIALLY_REFUNDED');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('PAY_FOR_ORDERS', 'TOP_UP_ACCOUNT', 'OTHER');

-- CreateEnum
CREATE TYPE "PaymentCurrency" AS ENUM ('USD', 'VND');

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "status",
ADD COLUMN     "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
DROP COLUMN "currency",
ADD COLUMN     "currency" "PaymentCurrency" NOT NULL DEFAULT 'USD',
DROP COLUMN "refundStatus",
ADD COLUMN     "refundStatus" "RefundStatus",
DROP COLUMN "type",
ADD COLUMN     "type" "PaymentType" NOT NULL DEFAULT 'OTHER';
