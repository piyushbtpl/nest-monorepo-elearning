import { NestFactory } from '@nestjs/core';
import { EnrollmentModule } from './enrollment.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(EnrollmentModule);
  const config = new DocumentBuilder()
    .setTitle('eLearning')
    .setDescription('The eLearning API description')
    .setVersion('1.0')
    .addTag('eLearning')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  await app.listen(3000);
}
bootstrap();
