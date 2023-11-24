/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-extraneous-class */

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Response } from 'express';
import { join } from 'node:path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'ui'),
      renderPath: /^((?!^\/api).)*$/s,
      exclude: ['/api*'],
      serveStaticOptions: {
        cacheControl: true,
        maxAge: '1year',
        setHeaders: (res: Response) => {
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
