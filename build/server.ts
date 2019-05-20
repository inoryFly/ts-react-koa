import * as path from 'path'
import * as webpack from 'webpack'
import * as nodeExternals from 'webpack-node-externals'
import {cloneDeep} from 'lodash'
import baseConfig,{getTsRule} from './common'

const serverBaseConfig:webpack.Configuration=cloneDeep(baseConfig)

serverBaseConfig.entry={
    'server-bundle':[
        path.resolve(__dirname,"../serverice/app.ts")
    ]
}
//忽略node_modules里的库，避免打包打输出文件
serverBaseConfig.externals=[nodeExternals()]
//避免打包路径错误
serverBaseConfig.node={
    __dirname:true,
    __filename:true
}
//忽略node内建库：入fs
serverBaseConfig.target='node'
//将入口起点的返回值将分配给 module.exports 对象
serverBaseConfig.output.libraryTarget='commonjs2'

const serverDevConfig:webpack.Configuration=cloneDeep(serverBaseConfig)

serverDevConfig.cache=false
serverDevConfig.output.filename='[name].js'
serverDevConfig.module.rules.push(
    getTsRule(path.resolve(__dirname,"../tsconfig.server.json"))
)

const serverProdConfig:webpack.Configuration=cloneDeep(serverBaseConfig)

export default {
    development:serverDevConfig,
    production:serverProdConfig
}