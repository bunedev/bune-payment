import { registerEnumType } from '@nestjs/graphql';

export enum EnumPaymentStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
  CANCELED = 'CANCELED',
  PROCESSING = 'PROCESSING',
  EXPIRED = 'EXPIRED',
  HOLD = 'HOLD',
  PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',
}

registerEnumType(EnumPaymentStatus, {
  name: 'EnumPaymentStatus',
});
