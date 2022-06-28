import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import pm2Connect from './pm2/index'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    pm2Connect(false)
  }
}
