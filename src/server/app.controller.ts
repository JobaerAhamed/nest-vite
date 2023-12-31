import { Controller, Get } from '@nestjs/common';

import { AppService } from '@server/app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hi')
  getHi() {
    return { hello: 'world' };
  }
}
