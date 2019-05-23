import * as path from 'path'
import * as webpack from 'webpack'
import * as merge from 'webpack-merge'
import baseConfig,{getTsRule,LessRule} from './common'


const clientDevConfig:webpack.Configuration={
    mode:"development",
    entry:{
        client:[
            path.resolve(__dirname,"../src/app.tsx")
        ],
        vendor:[
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'react-router-dom'
        ]
    },
    cache:false,
    output:{
        filename:'[name].js'
    },
    module:{
        rules:[
            getTsRule(path.resolve(__dirname,"../tsconfig.client.json")),
            LessRule({loader:"style-loader"})
        ]
    }
}


// clientDevConfig.plugins.
// clientDevConfig.optimization={

// }


export default {
    development:merge(baseConfig,clientDevConfig),
}