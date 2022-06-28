import config from '../config'
import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';
@Injectable()
export class InterfaceService {
    getConfigContent(program: any) {
        return new Promise((resolve) => {
            try {
                const pacsServer = config.Acquiesce.find((item: any) => item.name === program)
                const { location, configure, sendconfig } = pacsServer
                const completeConfig = join(location, configure)
                const configContent = readFileSync(completeConfig, 'utf-8')
                if (sendconfig) {
                    const completePath = join(location, sendconfig)
                    const sendContent = readFileSync(completePath, 'utf-8')
                    resolve({
                        status: 200,
                        message: `获取${program}配置成功`,
                        data: {
                            config: `${configContent}`,
                            sendConfig: `${sendContent}`
                        }
                    })
                    return
                }
                resolve({
                    status: 200,
                    message: `获取${program}配置成功`,
                    data: {
                        config: `${configContent}`
                    }
                })
            } catch (e) {
                resolve({
                    status: 500,
                    message: `获取${program}配置失败，请查看配置信息`,
                    data: ''
                })
            }
        })
    }
    saveConfigContent(program: any, data: any, url: any) {
        return new Promise((resolve, reject) => {
            try {
                const pacsServer = config.Acquiesce.find((item: any) => item.name === program)
                const { location, configure, sendconfig } = pacsServer
                if (url === '0') {
                    const completeConfig = join(location, configure)
                    writeFileSync(completeConfig, data, 'utf-8')
                } else {
                    const completeConfig = join(location, sendconfig)
                    writeFileSync(completeConfig, data, 'utf-8')
                }
                resolve({
                    status: 200,
                    message: '保存成功'
                })
            } catch (e) {
                resolve({
                    status: 404,
                    message: '未找到对应配置文件地址'
                })
            }
        })
    }
}
