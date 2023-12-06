import { Module } from '@nestjs/common';
import { PaymentModule } from './payments/payment.module';
import { PrismaModule } from './prisma/prisma.module';
import {
  ApolloDriver,
  ApolloDriverConfig,
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PaymentResolver } from './payments/payment.resolver';
import { PaypalModule } from './paypal/paypal.module';

@Module({
  imports: [
    PaymentModule,
    PrismaModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    PaypalModule,
  ],
  providers: [PaymentResolver],
})
export class AppModule {}
