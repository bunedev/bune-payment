import { HttpStatus, Injectable } from '@nestjs/common';
import { Payment } from './payment.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { ErrorCodes, ErrorMessages } from 'src/common/constants/errors';
import { CreatePaymentArgs } from './base/args/CreatePaymentArgs';
import { PaymentFindUniqueArgs } from './base/args/PaymentFindUniqueArgs';
import { DeletePaymentArgs } from './base/args/DeletePaymentArgs';
import { UpdatePaymentArgs } from './base/args/UpdatePaymentArgs';
import { isRecordNotFoundError } from 'src/prisma/prisma.util';
import { createGraphQLError } from 'bune-common';

@Injectable()
export class PaymentService {
  constructor(protected readonly prisma: PrismaService) {}

  /**
   * Create a new payment record with the provided arguments.
   *
   * @param args - The arguments used to create the payment record.
   * @returns A Promise that resolves to the newly created payment record.
   */
  async create(args: CreatePaymentArgs): Promise<Payment> {
    return this.prisma.payment.create({
      data: {
        ...args.data,
        status: 'PENDING',
      },
    });
  }

  /**
   * Update an existing payment record with the provided arguments.
   *
   * @param args - The arguments used to update the payment record.
   * @returns A Promise that resolves to the updated payment record.
   * @throws Error if no payment record is found for the update or if the update operation fails.
   */
  async update(args: UpdatePaymentArgs): Promise<Payment> {
    try {
      return this.prisma.payment.update({
        ...args,
        data: {
          ...args.data,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw createGraphQLError(
          HttpStatus.BAD_REQUEST,
          `No resource was found for ${JSON.stringify(args.where)}`,
          ErrorCodes.PaymentNotFound,
        );
      }
      throw createGraphQLError(
        HttpStatus.BAD_REQUEST,
        ErrorMessages.UpdateFailed,
        ErrorCodes.UpdateFailed,
      );
    }
  }

  /**
   * Delete a payment record based on the provided arguments.
   *
   * @param args - The arguments used to specify the payment record to be deleted.
   * @returns A Promise that resolves to the deleted payment record.
   * @throws Error if no payment record is found with the provided criteria.
   */
  async delete(args: DeletePaymentArgs): Promise<Payment> {
    try {
      return this.prisma.payment.delete(args);
    } catch (error) {
      throw createGraphQLError(
        HttpStatus.BAD_REQUEST,
        ErrorMessages.PaymentNotFound,
        ErrorCodes.PaymentNotFound,
      );
    }
  }

  /**
   * Find a single payment record based on the provided arguments.
   *
   * @param args - The arguments used to search for the payment record.
   * @returns A Promise that resolves to the found payment record or null if not found.
   */
  async findOne(args: PaymentFindUniqueArgs): Promise<Payment | null> {
    return this.prisma.payment.findUnique(args);
  }

  /**
   * Find a payment record by its unique identifier.
   *
   * @param id - The unique identifier of the payment record to find.
   * @returns A Promise that resolves to the found payment record.
   * @throws Error if no payment record is found with the provided ID.
   */
  async findById(id: string): Promise<Payment> {
    const payment = await this.prisma.payment.findUnique({ where: { id } });
    if (!payment) {
      throw createGraphQLError(
        HttpStatus.BAD_REQUEST,
        ErrorMessages.PaymentNotFound,
        ErrorCodes.PaymentNotFound,
      );
    }
    return payment;
  }
}
