import * as path from 'path'
import * as webpack from 'webpack'
import * as nodeExternals from 'webpack-node-externals'
import * as merge from 'webpack-merge'
import baseConfig,{getTsRule,LessRule} from './common'

const serverBaseConfig:webpack.Configuration={
    entry:{
        'server-bundle':[
            path.resolve(__dirname,"../server/app.ts")
        ]
    },
    output:{
        filename:'[name].js',
        //将入口起点的返回值将分配给 module.exports 对象
        libraryTarget:'commonjs2'
    },
    module:{
        rules:[
            getTsRule(path.resolve(__dirname,"../tsconfig.server.json")),
            LessRule({loader:"isomorphic-style-loader"})
        ]
    },
    //忽略node_modules里的库，避免打包打输出文件
    externals:[nodeExternals()],
    //避免打包路径错误
    node:{
        __dirname:true,
        __filename:true
    },
    //忽略node内建库：入fs
    target:"node",
    cache:false,
}



export default {
    development:merge(baseConfig,serverBaseConfig),
}