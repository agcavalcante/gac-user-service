import { NestFactory } from '@nestjs/core';
import { AppConfigService } from 'config/app/configuration.service';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configApp: AppConfigService = app.get(AppConfigService);
  await app.listen(configApp.port);
}
bootstrap();