import { Module } from '@nestjs/common';
import { InterfaceService } from './interface.service';
import { InterfaceController } from './interface.controller';

@Module({
  providers: [InterfaceService],
  controllers: [InterfaceController]
})
export class InterfaceModule {}
