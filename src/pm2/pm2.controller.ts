import { Controller, Get, Query } from '@nestjs/common';
import { Pm2Service } from './pm2.service';
@Controller('pm2')
export class Pm2Controller {
    constructor(private pm2Service: Pm2Service) { }
    @Get('/getPm2List')
    async getList() {
        return await this.pm2Service.getPm2List()
    }

    @Get('/pm2Restart')
    async restartPm2(@Query('id') id: any, @Query('type') type: any) {
        return await this.pm2Service.pm2Restart(id, type)
    }

    @Get('/pm2Stop')
    async stopPm2(@Query('id') id: any, @Query('type') type: any) {
        return await this.pm2Service.pm2Stop(id, type)
    }
}
