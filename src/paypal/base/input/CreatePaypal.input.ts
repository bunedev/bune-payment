import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePaypalInput {
  @Field()
  amount: number;

  @Field()
  currency: string;
}
