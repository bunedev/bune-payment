import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
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

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
