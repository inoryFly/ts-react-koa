import * as path from 'path'
import * as webpack from 'webpack'

export const getTsRule=(configFileName:string)=>({
    test:/\.tsx?$/,
    use:[
        {
            loader:'awesome-typescript-loader',
            options:{
                configFileName
            }
        }
    ]
})

const baseConfig:webpack.Configuration={
    module:{
        rules:[{
            test:/\.less$/,
            use:[
                {loader:"style-loader"},{
                    loader:"css-loader"
                },{
                    loader:"less-loader",
                    options:{
                        sourceMap:true,
                        javascriptEnabled:true
                    }
                }
            ]
        }]
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