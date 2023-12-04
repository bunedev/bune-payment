import { InputType, Field, PartialType } from '@nestjs/graphql';
import {
  IsString,
  IsNumber,
  IsDate,
  IsOptional,
  IsCurrency,
} from 'class-validator';

@InputType()
class PaymentUpdateInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString({ message: 'User ID must be a string' })
  userId?: string;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'Amount must be a number' })
  amount?: number;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate({ message: 'Time must be a valid date' })
  time?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Method must be a string' })
  method?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Status must be a string' })
  status?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString({ message: 'Transaction ID must be a string' })
  transactionId?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString({ message: 'Order ID must be a string' })
  orderId?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
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

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString({ message: 'Receipt must be a string' })
  receipt?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString({ message: 'Type must be a string' })
  type?: string;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'Fees must be a number' })
  fees?: number;
}

export { PaymentUpdateInput as PaymentUpdateInput };
