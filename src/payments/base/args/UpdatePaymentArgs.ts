import { ArgsType, Field } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentWhereUniqueInput } from '../input/PaymentWhereUniqueInput';
import { PaymentUpdateInput } from '../input/PaymentUpdateInput';

@ArgsType()
class UpdatePaymentArgs {
  @ValidateNested()
  @Type(() => PaymentWhereUniqueInput)
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  where!: PaymentWhereUniqueInput;

  @ValidateNested()
  @Type(() => PaymentUpdateInput)
  @Field(() => PaymentUpdateInput, { nullable: false })
  data!: PaymentUpdateInput;
}

export { UpdatePaymentArgs as UpdatePaymentArgs };
