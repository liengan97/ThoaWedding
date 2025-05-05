import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { FirebaseController } from './firebase/firebase.controller';

@Module({
  imports: [
    FirebaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public")
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
