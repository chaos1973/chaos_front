module.exports = {

    devServer: {

        proxy: {

            '/api': {

                target: 'localhost:3001', //这里填入你要请求的接口的前缀

               ws: true, //代理websocked

              changeOrigin: true, //虚拟的站点需要更换origin

         secure: false, //是否https接口，我用的http但是我变成false他打包后会报错，所以先true

                pathRewrite: {

                    '^/api': ''     //重写路径

                }

            }

        }

    }

}
————————————————
版权声明：本文为CSDN博主「会飞的猪@」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_53935634/article/details/126519577