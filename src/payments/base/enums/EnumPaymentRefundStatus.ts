import { registerEnumType } from '@nestjs/graphql';

export enum EnumPaymentRefundStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
}

registerEnumType(EnumPaymentRefundStatus, {
  name: 'EnumPaymentRefundStatus',
});
