Object.defineProperty(exports, '__esModule', { value: true });
const path = require('path')
// 开启的端口号
exports.PORT = 7788;
exports.Acquiesce = [{
    name: 'ai-pacs-server',
    location: path.join(__dirname, '../ProcessService/ai-pacs-server'),
    configure: '/config/default.js',
    command: 'pm2 start pm2.config.js',
    default: { "pid": 0, "name": "ai-pacs-server", "pm_id": -1, "monit": { "memory": 0, "cpu": 0 }, "pm_uptime": 0 }
}, {
    name: 'ai-server-cloud',
    location: path.join(__dirname, '../ProcessService/ai-server-cloud'),
    configure: '/config.json',
    command: 'pm2 start pm2.config.js',
    default: { "pid": 0, "name": "ai-server-cloud", "pm_id": -1, "monit": { "memory": 0, "cpu": 0 }, "pm_uptime": 0 }
}, {
    name: 'nginx',
    location: path.join(__dirname, '../ProcessService/openresty'),
    configure: '/conf/nginx.conf',
    command: 'pm2 start nginx.exe --interpreter none',
    default: { "pid": 0, "name": "nginx", "pm_id": -1, "monit": { "memory": 0, "cpu": 0 }, "pm_uptime": 0 }
}, {
    name: 'dispatch',
    location: path.join(__dirname, '../ProcessService/Disptch'),
    configure: '/config.ini',
    sendconfig:'/dispatch.bat',
    command: 'pm2 start dispatch.bat --interpreter none',
    default: { "pid": 0, "name": "dispatch", "pm_id": -1, "monit": { "memory": 0, "cpu": 0 }, "pm_uptime": 0 }
},
// {
//     name: 'supervise-server',
//     location: path.join(__dirname, '../supervise-server'),
//     configure: '/config.js',
//     command: 'pm2 start pm2.config.js',
//     default: { "pid": 0, "name": "supervise-server", "pm_id": -1, "monit": { "memory": 0, "cpu": 0 }, "pm_uptime": 0 }
// }, 
]

