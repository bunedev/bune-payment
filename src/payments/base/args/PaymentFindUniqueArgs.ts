import { ArgsType, Field } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentWhereUniqueInput } from '../input/PaymentWhereUniqueInput';

@ArgsType()
class PaymentFindUniqueArgs {
  @ValidateNested()
  @Type(() => PaymentWhereUniqueInput)
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  where!: PaymentWhereUniqueInput;
}

export { PaymentFindUniqueArgs as PaymentFindUniqueArgs };
