// paypal.resolver.ts
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { PaypalService } from './paypal.service';
import { CreatePaypalArgs } from './base/args/CreatePaypalArgs';
import { Payment } from 'src/payments/payment.entity';

@Resolver('Paypal')
export class PaypalResolver {
  constructor(private readonly paypalService: PaypalService) {}

  @Mutation(() => Payment)
  async createPaypal(@Args() paymentData: CreatePaypalArgs) {
    const { amount, currency } = paymentData.data;
    const payment = await this.paypalService.createPayment(amount, currency);
    return payment;
  }
}
