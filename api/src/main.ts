import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const options = new DocumentBuilder()
  .setTitle('Article exemple')
  .setDescription('The articles API description')
  .setVersion('1.0')
  .addTag('articles')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  //app.setGlobalPrefix('/api');


  await app.listen(3000);
}
bootstrap();

