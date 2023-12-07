import {
  Resolver,
  Query,
  Args,
  ResolveReference,
  Mutation,
} from '@nestjs/graphql';
import { Payment } from './payment.entity';
import { PaymentService } from './payment.service';
import { CreatePaymentArgs } from './base/args/CreatePaymentArgs';
import { PaymentFindUniqueArgs } from './base/args/PaymentFindUniqueArgs';
import { DeletePaymentArgs } from './base/args/DeletePaymentArgs';
import { UpdatePaymentArgs } from './base/args/UpdatePaymentArgs';
import { createGraphQLError } from 'bune-common';
import { HttpStatus } from '@nestjs/common';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private paymentService: PaymentService) {}

  // Query to retrieve payment information based on ID
  @Query(() => Payment)
  async getPayment(@Args() args: PaymentFindUniqueArgs): Promise<Payment> {
    return await this.paymentService.findOne(args);
  }

  // Mutation to create a new payment transaction
  @Mutation(() => Payment)
  async createPayment(@Args() args: CreatePaymentArgs): Promise<Payment> {
    return await this.paymentService.create(args);
  }

  @Mutation(() => Payment)
  async updatePayment(
    @Args() args: UpdatePaymentArgs,
  ): Promise<Payment | null> {
    try {
      return await this.paymentService.update(args);
    } catch (error) {
      throw createGraphQLError(
        error.status || HttpStatus.BAD_REQUEST,
        error.message,
        error.messageCode,
      );
    }
  }

  @Mutation(() => Payment)
  async deletePayment(
    @Args() args: DeletePaymentArgs,
  ): Promise<Payment | null> {
    try {
      return await this.paymentService.delete(args);
    } catch (error) {
      throw createGraphQLError(
        error.status || HttpStatus.BAD_REQUEST,
        error.message,
        error.messageCode,
      );
    }
  }

  // ResolveReference to resolve references to Payment objects
  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<Payment> {
    return await this.paymentService.findById(reference.id);
  }
}
