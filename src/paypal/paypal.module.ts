import { Module } from '@nestjs/common';
import { PaypalService } from './paypal.service';
import { PaypalResolver } from './paypal.resolver';

@Module({
  providers: [PaypalService, PaypalResolver],
})
export class PaypalModule {}
