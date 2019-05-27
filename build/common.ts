import * as path from 'path'
import * as webpack from 'webpack'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'

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

export const LessRule = () => {
    return {
        test: /\.less$/,
        use: [
            MiniCssExtractPlugin.loader, {
                loader: "css-loader",
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName:'[name]__[local]'
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
    plugins: [new MiniCssExtractPlugin({
        filename:"bundle.css"
    })],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    }
}
export default baseConfig