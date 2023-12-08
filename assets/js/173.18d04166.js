(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{498:function(s,a,t){"use strict";t.r(a);var r=t(7),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"【宋红康-mysql数据库-】【高级篇】【03】mysql的数据目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【宋红康-mysql数据库-】【高级篇】【03】mysql的数据目录"}},[s._v("#")]),s._v(" 【宋红康 MySQL数据库 】【高级篇】【03】MySQL的数据目录")]),s._v(" "),a("h2",{attrs:{id:"mysql8的主要目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql8的主要目录"}},[s._v("#")]),s._v(" MySQL8的主要目录")]),s._v(" "),a("p",[s._v("查看MySQL都使用了哪些目录：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("命令：find / -name mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[root@mysql8_01 ~]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# find / -name mysql")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc/logrotate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d/mysql\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib/mysql\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib/mysql/mysql\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr/bin/mysql\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr/lib64/mysql\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"数据文件的存放目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据文件的存放目录"}},[s._v("#")]),s._v(" 数据文件的存放目录")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib/mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("/var/lib/mysql")]),s._v("这个数据目录下的文件和子目录比较多，除了"),a("code",[s._v("information_schema")]),s._v("这个系统数据库外，其他的数据库在该目录（数据目录）下都有对应的子目录")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/dcf6bd1d3a58410ab63d44e251342b8f.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("mysql> show variables like "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'datadir'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" Variable_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" Value           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" datadir       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib/mysql/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n1 row in "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("02 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h4",{attrs:{id:"命令存放目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令存放目录"}},[s._v("#")]),s._v(" 命令存放目录")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/3347f5877a71496cb9de7bee1364e313.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("h4",{attrs:{id:"配置文件目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件目录"}},[s._v("#")]),s._v(" 配置文件目录")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("/usr/share/mysql-8.0")]),s._v("（命令及配置文件）")]),s._v(" "),a("li",[a("code",[s._v("/etc/my.cnf")])])]),s._v(" "),a("h2",{attrs:{id:"数据库和文件系统的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库和文件系统的关系"}},[s._v("#")]),s._v(" 数据库和文件系统的关系")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/63d89631d17e4fb7a57b620ba776c0f0.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("h4",{attrs:{id:"默认数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认数据库"}},[s._v("#")]),s._v(" 默认数据库")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("mysql> SHOW DATABASES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" Database           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" dbtest01           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" information_schema "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" mysql              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" performance_schema "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" sys                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n5 rows in "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("01 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql> \n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("可以看到有4个数据库是属于MySQL自带的数据库：mysql、information_schema、performance_schema、sys")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/087f35ec7e51451f89e8d5349bfcf4c8.png",alt:"在这里插入图片描述"}}),a("br"),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/49a6f8a3bad0454abb4a5614cf8ca74f.png",alt:"在这里插入图片描述"}}),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/d95d1a1c293e492790baa0d8a98a25bf.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/3509bc2cdc8c41d3bb52dd8fc49557c2.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/862ccd914b4e43f4b90d54db4165709a.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("h4",{attrs:{id:"数据库在文件系统中的表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库在文件系统中的表示"}},[s._v("#")]),s._v(" 数据库在文件系统中的表示")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/7b4b70793de9434b80dba0f1a4b875eb.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("查看数据目录下的内容：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib/mysql\n\nll\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"表在文件系统中的表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表在文件系统中的表示"}},[s._v("#")]),s._v(" 表在文件系统中的表示")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/e06079ef0ccd40f2839916a60552bcf1.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("h4",{attrs:{id:"视图在文件系统中的表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视图在文件系统中的表示"}},[s._v("#")]),s._v(" 视图在文件系统中的表示")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/d5792da986fa47418e439d3d9490d992.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("h2",{attrs:{id:"myisam和innodb存储引擎如何存储表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam和innodb存储引擎如何存储表"}},[s._v("#")]),s._v(" MyISAM和InnoDB存储引擎如何存储表")]),s._v(" "),a("h4",{attrs:{id:"innodb存储引擎模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb存储引擎模式"}},[s._v("#")]),s._v(" InnoDB存储引擎模式")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/d272c16587db4f14b2ebc7258fcb26f4.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/c92a49fb801b49af841d238619a91743.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/b09100d0e01548bca39c2a7e002993d2.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/8b987165d6304bc78f91d5d4544e9bd2.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/8232408f9fb44b319b0761de4536337e.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/d245324f545a46f48840d108346a1290.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/6da995ad24f54792b2e88c4f3f3deb62.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2c822edf28584b92ad8f1268adad4e04.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/e6f5cba7daa7425280c472d9391d403a.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/9cbda4e4c42e41469aba049298a65efc.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("h4",{attrs:{id:"myisam存储引擎模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam存储引擎模式"}},[s._v("#")]),s._v(" MyISAM存储引擎模式")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/8c87f02eee60489ebe4f9cb32fca0715.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/294a2a22a9664706a9ef60cfb0c6963b.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/b83cd487b775433a9beb3b17e5585bd3.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("h4",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/872ff306831948c7942ce2bbde39e170.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("h2",{attrs:{id:"其他文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他文件"}},[s._v("#")]),s._v(" 其他文件")]),s._v(" "),a("blockquote",[a("p",[s._v("后续会讲解")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/a5695d0564b645f0a1127b3f9de1ea71.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("blockquote",[a("p",[s._v("MySQL中主要使用了两个存储引擎：InnoDB、MyISAM"),a("br"),s._v("\nMySQL从5.5开始，默认存储引擎由 MyISAM 改为 InnoDB")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("MySQL5.7版本—InnoDB"),a("br"),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/cf17970d52b148c790a79851c75ff03f.png",alt:"在这里插入图片描述"}}),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/3a7a77a8406c402192770e6dc515c37f.png",alt:"在这里插入图片描述"}})])]),s._v(" "),a("li",[a("p",[s._v("MySQL8.0版本—InnoDB"),a("br"),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/d4fba52fc0c44ca4b46ac3da56ca812f.png",alt:"在这里插入图片描述"}}),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/0a9389cdccc24a378f8251f601451919.png",alt:"在这里插入图片描述"}}),a("br"),s._v("\n如何证明表的所有信息都存储在.ibd文件中了？查看.ibd文件的信息：（"),a("code",[s._v("ibd2sdi --dump-file=随便命名.txt 表名.ibd")]),s._v("）")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[root@mysql8_01 ~]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /var/lib/mysql/dbtest01")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[root@mysql8_01 dbtest01]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw-r-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" 1 mysql mysql 114688 May 25 17:27 emp01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ibd\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[root@mysql8_01 dbtest01]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ibd2sdi --dump-file=emp01.txt emp01.ibd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[root@mysql8_01 dbtest01]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw-r-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" 1 mysql mysql 114688 May 25 17:27 emp01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ibd\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" 1 root  root   11118 May 30 15:06 emp01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[root@mysql8_01 dbtest01]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi emp01.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("li"),s._v(" "),a("li",[a("p",[s._v("首先，在MySQL5.7和MySQL8.0版本中都使用MyISAM引擎新建一张表")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("student_myisam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MYISAM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("MySQL5.7版本—MyISAM"),a("br"),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/ee0d7f7fe76943ad8c3e474357084adf.png",alt:"在这里插入图片描述"}})])]),s._v(" "),a("li",[a("p",[s._v("MySQL8.0版本—MyISAM"),a("br"),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/4735a3e1767d4a9093e08769ace2d2fd.png",alt:"在这里插入图片描述"}})])])])])}),[],!1,null,null,null);a.default=e.exports}}]);