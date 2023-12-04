import { Module } from '@nestjs/common';
import { PaymentModule } from './payments/payment.module';
import { PrismaModule } from './prisma/prisma.module';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

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
  ],
})
export class AppModule {}
