import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.enableCors({
  //   origin: "http://localhost:5173",
  //   methods: ["GET", "POST"],
  //   allowedHeaders: ["Content-Type"],
  // });


  app.enableCors({ origin: "*" });
  // app.setGlobalPrefix("api"); 

  await app.listen(process.env.PORT ?? 3000);
  
  console.log(`App running at: https://${process.env.VERCEL_URL}`);
}
bootstrap();
