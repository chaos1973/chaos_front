(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{438:function(n,e,a){"use strict";a.r(e);var t=a(7),s=Object(t.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"使用nginx部署多个前端项目-三种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用nginx部署多个前端项目-三种方式"}},[n._v("#")]),n._v(" 使用nginx部署多个前端项目（三种方式）")]),n._v(" "),e("p",[n._v("文章转载自：https://blog.csdn.net/qq_25460159/article/details/112947177")]),n._v(" "),e("p",[n._v("个人总结了3种方法来实现在一台服务器上使用nginx部署多个前端项目的方法。")]),n._v(" "),e("p",[n._v("基于域名配置")]),n._v(" "),e("p",[n._v("基于端口配置")]),n._v(" "),e("p",[n._v("基于location配置")]),n._v(" "),e("p",[n._v("在正式开始之前，我们先来看一下nginx安装的默认配置文件：/etc/nginx/nginx.conf 文件")]),n._v(" "),e("p",[n._v("可以看到图中的：include /usr/nginx/modules/*.conf，这句话的作用就是可以在nginx启动加载所有 /usr/nginx/modules/ 目录下的 *.conf 文件。所以，平时我们为了方便管理，可以在此目录下面定义自己的 xx.conf 文件即可。但是注意，一定要以.conf 结尾。")]),n._v(" "),e("p",[n._v("介绍完毕，下面我们先来说一下最常用，也是许多公司线上使用的方式。")]),n._v(" "),e("p",[n._v("基于域名配置\n基于域名配置，前提是先配置好了域名解析。比如说你自己买了一个域名：www.fly.com。然后你在后台配置了2个它的二级域名：a.fly.com、 b.fly.com。")]),n._v(" "),e("p",[n._v("配置文件如下：")]),n._v(" "),e("p",[n._v("配置 a.fly.com 的配置文件：")]),n._v(" "),e("p",[n._v("vim /usr/nginx/modules/a.conf")]),n._v(" "),e("p",[n._v("server {\nlisten 80;\nserver_name a.fly.com;")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("    location / { \n            root /data/web-a/dist;\n            index index.html;\n    }\n")])])]),e("p",[n._v("}\n配置 b.fly.com 的配置文件：")]),n._v(" "),e("p",[n._v("vim /usr/nginx/modules/b.conf")]),n._v(" "),e("p",[n._v("server {\nlisten 80;\nserver_name b.fly.com;")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("    location / { \n            root /data/web-b/dist;\n            index index.html;\n    }\n")])])]),e("p",[n._v("}\n这种方式的好处是，主机只要开放80端口即可。然后访问的话直接访问二级域名就可以访问。")]),n._v(" "),e("p",[n._v("基于端口配置\n配置文件如下：")]),n._v(" "),e("p",[n._v("配置 a.fly.com 的配置文件：")]),n._v(" "),e("p",[n._v("vim /usr/nginx/modules/a.conf")]),n._v(" "),e("p",[n._v("server {\nlisten 8000;")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("    location / { \n            root /data/web-a/dist;\n            index index.html;\n    }\n")])])]),e("p",[n._v("}")]),n._v(" "),e("h1",{attrs:{id:"nginx-80端口配置-监听a二级域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-80端口配置-监听a二级域名"}},[n._v("#")]),n._v(" nginx 80端口配置 （监听a二级域名）")]),n._v(" "),e("p",[n._v("server {\nlisten  80;\nserver_name a.fly.com;")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("    location / {\n            proxy_pass http://localhost:8000; #转发\n    }\n")])])]),e("p",[n._v("}\n配置 b.fly.com 的配置文件：")]),n._v(" "),e("p",[n._v("vim /usr/nginx/modules/b.conf")]),n._v(" "),e("p",[n._v("server {\nlisten 8001;")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("    location / { \n            root /data/web-b/dist;\n            index index.html;\n    }\n")])])]),e("p",[n._v("}")]),n._v(" "),e("h1",{attrs:{id:"nginx-80端口配置-监听b二级域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-80端口配置-监听b二级域名"}},[n._v("#")]),n._v(" nginx 80端口配置 （监听b二级域名）")]),n._v(" "),e("p",[n._v("server {\nlisten  80;\nserver_name b.fly.com;")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("    location / {\n            proxy_pass http://localhost:8001; #转发\n    }\n")])])]),e("p",[n._v("}\n可以看到，这种方式一共启动了4个server，而且配置远不如第一种简单，所以不推荐。")]),n._v(" "),e("p",[n._v("基于location配置\n配置文件如下：")]),n._v(" "),e("p",[n._v("配置 a.fly.com 的配置文件：")]),n._v(" "),e("p",[n._v("vim /usr/nginx/modules/ab.conf")]),n._v(" "),e("p",[n._v("server {\nlisten 80;")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("    location / { \n            root /data/web-a/dist;\n            index index.html;\n    }\n    \n    location /web-b { \n            alias /data/web-b/dist;\n            index index.html;\n    }\n")])])]),e("p",[n._v("}\n"),e("strong",[n._v("注意：这种方式配置的话，location / 目录是root，其他的要使用alias。")])]),n._v(" "),e("p",[n._v("可以看到，这种方式的好处就是我们只有一个server，而且我们也不需要配置二级域名。并且前端项目里要配置二级目录")]),n._v(" "),e("p",[n._v("react 配置请参考：https://blog.csdn.net/mollerlala/article/details/96427751?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2")]),n._v(" "),e("p",[n._v("vue 配置请参考：https://blog.csdn.net/weixin_33868027/article/details/92139392")])])}),[],!1,null,null,null);e.default=s.exports}}]);