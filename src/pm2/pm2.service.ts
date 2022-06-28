import { Injectable } from '@nestjs/common';
import pm2Connect, { getState } from './index';
import Config from '../config'
const pm2 = require('pm2')
const cmd = require('node-cmd')
@Injectable()
export class Pm2Service {
    getPm2List() {
        return new Promise((resolve, reject) => {
            const state = getState()
            if (state.connected) {
                pm2.list((err: any, list: any) => {
                    const listBak = err ? [] : list
                    const { Acquiesce } = Config;
                    const AcquiesceArray = Acquiesce.map((item: any) => {
                        const activeItem = listBak.find((i: any) => item.name === i.name)
                        return activeItem ? activeItem : item.default
                    })
                    resolve(AcquiesceArray)
                })
            } else {
                pm2Connect(false)
                resolve([])
            }
        })
    }
    pm2Restart(id: any, type: any) {
        if (id == -1) {
            const activeItem = Config.Acquiesce.find((item: any) => item.name === type)
            cmd.run(`cd ${activeItem.location} & ${activeItem.command}`, (res: any) => {
                console.log(res)
            });
            return
        }
        return pm2.restart(Number(id))
    }
    pm2Stop(id: any, type: any) {
        if (id === -1) {
            return {
                status: 404,
                code: -1,
                message: '请求成功'
            }
        }
        return pm2.stop(Number(id))
    }
}
