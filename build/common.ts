import * as path from 'path'
import * as webpack from 'webpack'

export const getTsRule=configFileName=>({
    test:/\.tsx?$/,
    use:[
        {
            loader:'ts-loader',
            options:{
                configFileName
            }
        }
    ]
})

const baseConfig:webpack.Configuration={
    module:{
        rules:[]
    },
    output:{
        path:path.resolve(__dirname,"../bundle"),
        publicPath:"/assets/"
    },
    plugins:[],
    resolve:{
        extensions: [".ts", ".tsx", ".js",".jsx", ".json"]
    }
}
export default baseConfig
// export default  baseConfig:webpack.Configure={

// }