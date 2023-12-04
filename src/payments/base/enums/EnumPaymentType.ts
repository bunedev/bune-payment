import { registerEnumType } from '@nestjs/graphql';

export enum EnumPaymentType {
  PAY_FOR_ORDERS = 'PAY_FOR_ORDERS',
  TOP_UP_ACCOUNT = 'TOP_UP_ACCOUNT',
  OTHER = 'OTHER',
}

registerEnumType(EnumPaymentType, {
  name: 'EnumPaymentType',
});
