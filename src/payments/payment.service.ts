import { Injectable } from '@nestjs/common';
import { Payment } from './payment.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { createGraphQLError } from 'src/utils/graphql-errors.util';
import { ErrorCodes, ErrorMessages } from 'src/common/constants/errors';
import { CreatePaymentInput } from './base/input/CreatePaymentInput';

@Injectable()
export class PaymentService {
  constructor(protected readonly prisma: PrismaService) {}
  async findById(id: string): Promise<Payment> {
    const payment = await this.prisma.payment.findUnique({ where: { id } });
    if (!payment) {
      throw createGraphQLError(
        ErrorMessages.PaymentNotFound,
        ErrorCodes.PaymentNotFound,
      );
    }
    return payment;
  }

  async createPayment(data: CreatePaymentInput): Promise<Payment> {
    return await this.prisma.payment.create({
      data,
    });
  }
}
