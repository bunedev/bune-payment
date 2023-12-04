import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDate,
  IsOptional,
  IsCurrency,
} from 'class-validator';

@InputType()
class CreatePaymentInput {
  @Field()
  @IsNotEmpty({ message: 'User ID is required' })
  userId: string;

  @Field(() => Number)
  @IsNotEmpty({ message: 'Amount is required' })
  @IsNumber({}, { message: 'Amount must be a number' })
  amount: number;

  @Field()
  @IsNotEmpty({ message: 'Time is required' })
  @IsDate({ message: 'Time must be a valid date' })
  time: Date;

  @Field()
  @IsNotEmpty({ message: 'Method is required' })
  @IsString({ message: 'Method must be a string' })
  method: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Transaction ID must be a string' })
  transactionId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Order ID must be a string' })
  orderId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;

  @Field()
  @IsNotEmpty({ message: 'Currency is required' })
  @IsString({ message: 'Currency must be a string' })
  @IsCurrency(undefined, { message: 'Currency must be a valid currency code' })
  currency?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Refund status must be a string' })
  refundStatus?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Gateway must be a string' })
  gateway?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Receipt must be a string' })
  receipt?: string;

  @Field()
  @IsNotEmpty({ message: 'Type is required' })
  @IsString({ message: 'Type must be a string' })
  type?: string;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'Fees must be a number' })
  fees?: number;
}

export { CreatePaymentInput as CreatePaymentInput };
