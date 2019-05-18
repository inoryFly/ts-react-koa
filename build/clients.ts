import * as path from 'path'
import * as webpack from 'webpack'
import {cloneDeep} from 'lodash'

import baseConfig,{getTsRule} from './common'

const clientBaseConfig:webpack.Configuration=cloneDeep(baseConfig)

clientBaseConfig.entry={
    client:[
        path.resolve(__dirname,"../src/app.tsx")
    ],
    vendor:[
        'react',
        'react-dom'
    ]
}

const clientDevConfig:webpack.Configuration=cloneDeep(clientBaseConfig)

clientDevConfig.mode="development"
clientDevConfig.cache=false //禁用缓存
clientDevConfig.output.filename='[name].js' //直接使用源文件名作为打包后文件名
clientDevConfig.module.rules.push(
    getTsRule(path.resolve(__dirname,"../tsconfig.client.json"))
)
// clientDevConfig.plugins.
// clientDevConfig.optimization={

// }
