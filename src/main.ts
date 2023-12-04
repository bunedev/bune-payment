import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { GqlAllExceptionsFilter } from 'src/common/filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply the exception filter globally
  app.useGlobalFilters(new GqlAllExceptionsFilter());
  await app.listen(process.env.APP_PORT || 9999);
}
bootstrap();
