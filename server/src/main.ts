import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 9999;
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
      }),
    );

    await app.listen(PORT, () => {
      console.log(`server is running on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
