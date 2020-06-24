import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceOptions } from './microsevice.config.ts/service.options';
const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );

  await app.listen(() => {
    logger.log('micro service is in action');
  });
}
bootstrap();
