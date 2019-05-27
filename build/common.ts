import * as path from 'path'
import * as webpack from 'webpack'

export const getTsRule = (configFileName: string) => ({
    test: /\.tsx?$/,
    use: [
        {
            loader: 'awesome-typescript-loader',
            options: {
                configFileName
            }
        }
    ]
})

export const LessRule = (styleLoader) => {
    return {
        test: /\.less$/,
        use: [
            styleLoader, {
                loader: "css-loader",
                options: {
                    importLoaders: 1,
                    modules: true,
                }
            }, {
                loader: "less-loader"
            }
        ]
    }
}
const baseConfig: webpack.Configuration = {
    module: {
        rules: [{
            test:/\.(png|jpe?g|gif)$/,loader:"url-loader",
            options:{
                limit:8000,
                name:"static/[hash].[ext]"
            }
        }]
    },
    output: {
        path: path.resolve(__dirname, "../bundle"),
        publicPath: "/assets/"
    },
    plugins: [],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    }
}
export default baseConfig