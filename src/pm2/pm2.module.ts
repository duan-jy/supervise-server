import { Module } from '@nestjs/common';
import { Pm2Service } from './pm2.service';
import { Pm2Controller } from './pm2.controller';

@Module({
  providers: [Pm2Service],
  controllers: [Pm2Controller]
})
export class Pm2Module {}
