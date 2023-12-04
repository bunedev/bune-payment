import { ArgsType, Field } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentWhereUniqueInput } from '../input/PaymentWhereUniqueInput';

@ArgsType()
class DeletePaymentArgs {
  @ValidateNested()
  @Type(() => PaymentWhereUniqueInput)
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  where!: PaymentWhereUniqueInput;
}

export { DeletePaymentArgs as DeletePaymentArgs };
