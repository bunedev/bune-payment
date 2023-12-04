import {
  Resolver,
  Query,
  Args,
  ResolveReference,
  Mutation,
} from '@nestjs/graphql';
import { Payment } from './payment.entity';
import { PaymentService } from './payment.service';
import { CreatePaymentInput } from './base/input/CreatePaymentInput';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private paymentService: PaymentService) {}

  @Query(() => Payment)
  async getPayment(@Args('id') id: string): Promise<Payment> {
    return await this.paymentService.findById(id);
  }

  @Mutation(() => Payment)
  async createPayment(
    @Args('createPaymentData') createPaymentData: CreatePaymentInput,
  ): Promise<Payment> {
    return await this.paymentService.createPayment(createPaymentData);
  }

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<Payment> {
    return await this.paymentService.findById(reference.id);
  }
}
