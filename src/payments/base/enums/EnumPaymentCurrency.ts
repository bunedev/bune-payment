import { registerEnumType } from '@nestjs/graphql';

export enum EnumPaymentCurrency {
  USD = 'USD',
  VND = 'VND',
}

registerEnumType(EnumPaymentCurrency, {
  name: 'EnumPaymentCurrency',
});
