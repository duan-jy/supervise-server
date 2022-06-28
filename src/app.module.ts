import { Module, OnModuleDestroy } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { InterfaceModule } from './interface/interface.module';
import { Pm2Module } from './pm2/pm2.module';

@Module({
  imports: [
    InterfaceModule,
    Pm2Module,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../public'),
    }),],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements OnModuleDestroy {
  async onModuleDestroy() {
    console.log('Module 正在被销毁');
    // try {
    //   if (config.whetherLocal) {
    //     await shutdown();
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  }
  async onApplicationShutdown() {
    console.log('App 正在被终止');
  }
}
