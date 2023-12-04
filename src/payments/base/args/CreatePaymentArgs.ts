import { ArgsType, Field } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePaymentInput } from '../input/CreatePaymentInput';

@ArgsType()
class CreatePaymentArgs {
  @ValidateNested()
  @Type(() => CreatePaymentInput)
  @Field(() => CreatePaymentInput, { nullable: false })
  data!: CreatePaymentInput;
}

export { CreatePaymentArgs as CreatePaymentArgs };
