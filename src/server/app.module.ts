import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "ui"),
      renderPath: /^((?!^\/api).)*$/s,
      exclude: ['/api*'],
      serveStaticOptions: {
        cacheControl: true,
        maxAge: '1year',
        setHeaders: res => {
          res.setHeader('X-Powered-By', 'Ninja Turtles 1.4');
          res.setHeader('X-Hello-There', 'General Kenobi!');
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
