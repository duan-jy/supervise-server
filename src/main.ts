import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Config from './config'
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true, // 开启跨域
    bodyParser: true,
    logger: ['warn', 'debug', 'error', 'log'],
  });
  await app.listen(Config.PORT);
}
bootstrap();
