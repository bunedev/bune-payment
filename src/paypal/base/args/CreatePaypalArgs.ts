import { ArgsType, Field } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePaypalInput } from '../input/CreatePaypal.input';

@ArgsType()
class CreatePaypalArgs {
  @ValidateNested()
  @Type(() => CreatePaypalInput)
  @Field(() => CreatePaypalInput, { nullable: false })
  data!: CreatePaypalInput;
}

export { CreatePaypalArgs as CreatePaypalArgs };
