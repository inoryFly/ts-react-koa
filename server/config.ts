import * as csshook from 'css-modules-require-hook'
import * as imghook from 'asset-require-hook'
csshook({
    extensions:['.less'],
    camelCase: true,
    generateScopedName:'[name]__[local]'
})
imghook({
    extensions: ['jpg', 'png', 'gif', 'webp'],
    name:'/assets/static/[hash].[ext]',
    limit: 8000
})
export default {
    port:"3344",
    isDev:true
}