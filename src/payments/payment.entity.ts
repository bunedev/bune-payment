import { ObjectType, Field, ID } from '@nestjs/graphql';
import { EnumPaymentStatus } from './base/enums/EnumPaymentStatus';
import { EnumPaymentCurrency } from './base/enums/EnumPaymentCurrency';
import { EnumPaymentRefundStatus } from './base/enums/EnumPaymentRefundStatus';
import { EnumPaymentType } from './base/enums/EnumPaymentType';

@ObjectType()
export class Payment {
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

  @Field(() => Number)
  amount: number;

  @Field()
  time: Date;

  @Field()
  method: string;

  @Field()
  status: EnumPaymentStatus;

  @Field({ nullable: true })
  transactionId?: string;

  @Field({ nullable: true })
  orderId?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  currency: EnumPaymentCurrency;

  @Field({ nullable: true })
  refundStatus?: EnumPaymentRefundStatus;

  @Field({ nullable: true })
  gateway?: string;

  @Field({ nullable: true })
  receipt?: string;

  @Field()
  type: EnumPaymentType;

  @Field(() => Number, { nullable: true })
  fees?: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
