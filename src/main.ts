import { NestFactory } from '@nestjs/core';
import { GqlAllExceptionsFilter } from 'bune-common';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply the exception filter globally
  app.useGlobalFilters(new GqlAllExceptionsFilter());
  await app.listen(process.env.APP_PORT || 9999);
}
bootstrap();
