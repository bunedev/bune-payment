import { InputType, Field } from '@nestjs/graphql';

@InputType()
class CreatePaymentInput {
  @Field()
  userId: string;

  @Field(() => Number)
  amount: number;

  @Field()
  time: Date;

  @Field()
  method: string;

  @Field()
  status: string;

  @Field({ nullable: true })
  transactionId?: string;

  @Field({ nullable: true })
  orderId?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  currency: string;

  @Field({ nullable: true })
  refundStatus?: string;

  @Field({ nullable: true })
  gateway?: string;

  @Field({ nullable: true })
  receipt?: string;

  @Field()
  type: string;

  @Field(() => Number, { nullable: true })
  fees?: number;
}

export { CreatePaymentInput as CreatePaymentInput };
