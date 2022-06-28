import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { InterfaceService } from './interface.service';
@Controller('api')
export class InterfaceController {
    constructor(private interfaceService: InterfaceService) { }
    @Get('/getConfig')
    async getConfigContent(@Query('program') program: any) {
        return await this.interfaceService.getConfigContent(program)
    }
    @Post('/saveConfig')
    @HttpCode(200)
    async saveConfigContent(@Body('program') program: any, @Body('content') content: any, @Body('url') url: any) {
        return await this.interfaceService.saveConfigContent(program, content, url)
    }
}
