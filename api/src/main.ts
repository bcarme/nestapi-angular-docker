import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  /*app.useStaticAssets({
    root: join(__dirname, '..', 'client/dist/client'),
    prefix: '/',
  });*/
  app.setGlobalPrefix('/api');
  await app.listen(3000);
}
bootstrap();

