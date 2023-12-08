(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{530:function(s,e,l){"use strict";l.r(e);var a=l(7),t=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mysql恢复数据库-mysql命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql恢复数据库-mysql命令"}},[s._v("#")]),s._v(" MySQL恢复数据库（mysql命令）")]),s._v(" "),e("p",[s._v("当数据丢失或意外损坏时，可以通过恢复已经备份的数据来尽量减少数据的丢失和破坏造成的损失。本节主要介绍如何对备份的数据进行恢复操作。")]),s._v(" "),e("p",[s._v("在《"),e("a",{attrs:{href:"http://c.biancheng.net/view/7373.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL mysqldump备份数据库"),e("OutboundLink")],1),s._v("》一节中介绍了如何使用 mysqldump 命令将数据库中的数据备份成一个文本文件，且备份文件中通常包含 CREATE 语句和 INSERT 语句。")]),s._v(" "),e("p",[s._v("在 MySQL 中，可以使用 mysql 命令来恢复备份的数据。mysql 命令可以执行备份文件中的 CREATE 语句和 INSERT 语句，也就是说，mysql 命令可以通过 CREATE 语句来创建数据库和表，通过 INSERT 语句来插入备份的数据。")]),s._v(" "),e("p",[s._v("mysql 命令语法格式如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql -u username -P [dbname] < filename.sql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中：")]),s._v(" "),e("ul",[e("li",[s._v("username 表示用户名称；")]),s._v(" "),e("li",[s._v("dbname 表示数据库名称，该参数是可选参数。如果 filename.sql 文件为 mysqldump 命令创建的包含创建数据库语句的文件，则执行时不需要指定数据库名。如果指定的数据库名不存在将会报错；")]),s._v(" "),e("li",[s._v("filename.sql 表示备份文件的名称。")])]),s._v(" "),e("p",[s._v("注意：mysql 命令和 mysqldump 命令一样，都直接在命令行（cmd）窗口下执行。")]),s._v(" "),e("h4",{attrs:{id:"例-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#例-1"}},[s._v("#")]),s._v(" 例 1")]),s._v(" "),e("p",[s._v("下面使用 root 用户恢复所有数据库，命令如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql -u root -p < C:\\all.sql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("执行完后，MySQL 数据库就已经恢复了 all.sql 文件中的所有数据库。")]),s._v(" "),e("p",[s._v("注意：如果使用"),e("code",[s._v("--all-databases")]),s._v("参数备份了所有的数据库，那么恢复时不需要指定数据库。因为，其对应的 sql 文件中含有 CREATE DATABASE 语句，可以通过该语句创建数据库。创建数据库之后，可以执行 sql 文件中的 USE 语句选择数据库，然后在数据库中创建表并且插入记录。")])])}),[],!1,null,null,null);e.default=t.exports}}]);