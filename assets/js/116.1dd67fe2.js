(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{458:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("笔记来源："),s("a",{attrs:{href:"https://www.bilibili.com/video/BV1Ry4y1574R",target:"_blank",rel:"noopener noreferrer"}},[t._v("【尚硅谷】SpringMVC教程丨一套快速上手spring mvc"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("[TOC]")]),t._v(" "),s("h1",{attrs:{id:"springmvc-视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-视图"}},[t._v("#")]),t._v(" SpringMVC 视图")]),t._v(" "),s("p",[t._v("SpringMVC 中的视图是"),s("code",[t._v("View")]),t._v("接口，视图的作用渲染数据，将模型"),s("code",[t._v("Model")]),t._v("中的数据展示给用户")]),t._v(" "),s("p",[t._v("SpringMVC 视图的种类很多，默认有"),s("strong",[t._v("转发视图")]),s("code",[t._v("InternalResourceView")]),t._v("和"),s("strong",[t._v("重定向视图")]),s("code",[t._v("RedirectView")])]),t._v(" "),s("p",[t._v("当工程引入"),s("code",[t._v("jstl")]),t._v("的依赖，转发视图会自动转换为"),s("code",[t._v("JstlView")]),t._v("（JSP 内容了解即可）")]),t._v(" "),s("p",[t._v("若使用的视图技术为"),s("code",[t._v("Thymeleaf")]),t._v("，在 SpringMVC 的配置文件中配置了"),s("code",[t._v("Thymeleaf")]),t._v("的视图解析器，由此视图解析器解析之后所得到的是"),s("code",[t._v("ThymeleafView")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("注意")]),t._v("：只有在视图名称没有任何前缀时，视图被"),s("code",[t._v("Thymeleaf")]),t._v("视图解析器解析之后，创建的才是"),s("code",[t._v("ThymeleafView")]),t._v("。当视图名称包含前缀（如"),s("code",[t._v("forward:")]),t._v("或"),s("code",[t._v("redirect:")]),t._v("）时，分别对应的时"),s("code",[t._v("InternalResourceView")]),t._v("转发视图和"),s("code",[t._v("RedirectView")]),t._v("重定向视图")])]),t._v(" "),s("h2",{attrs:{id:"_1、thymeleafview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、thymeleafview"}},[t._v("#")]),t._v(" 1、ThymeleafView")]),t._v(" "),s("p",[t._v("当控制器方法中所设置的视图名称没有任何前缀时，此时的视图名称会被 SpringMVC 配置文件中所配置的视图解析器解析，视图名称拼接视图前缀和视图后缀所得到的最终路径，会通过转发的方式实现跳转")]),t._v(" "),s("p",[t._v("后台测试代码")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/testThymeleaftView"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testThymeleaftView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("前台测试代码")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("th:")]),t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@{/viewController/testThymeleaftView}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("测试 ThymeleaftView"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("断点调试，查看创建的"),s("code",[t._v("View")]),t._v("视图对象为"),s("code",[t._v("ThymeleafView")]),t._v("对象")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/03/22/D3KZ6tgpVO9Xozn.png",alt:"image-20220322200839355"}})]),t._v(" "),s("h2",{attrs:{id:"_2、转发视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、转发视图"}},[t._v("#")]),t._v(" 2、转发视图")]),t._v(" "),s("p",[t._v("SpringMVC 中默认的转发视图是"),s("code",[t._v("InternalResourceView")])]),t._v(" "),s("p",[t._v("创建转发视图的情况：当控制器方法中所设置的视图名称以"),s("code",[t._v("forward:")]),t._v("为前缀时，创建"),s("code",[t._v("InternalResourceView")]),t._v("视图，此时的视图名称不会被 SpringMVC 配置文件中所配置的视图解析器解析，而是会将前缀"),s("code",[t._v("forward:")]),t._v("去掉，剩余部分作为最终路径通过转发的方式实现跳转")]),t._v(" "),s("p",[t._v("例如："),s("code",[t._v("forward:/")]),t._v("、"),s("code",[t._v("forward:/viewController/testThymeleaftView")])]),t._v(" "),s("p",[t._v("后台测试代码")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/testForward"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testForward")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forward:/viewController/testThymeleaftView"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("前台测试代码")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("th:")]),t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@{/viewController/testForward}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("测试 InternalResourceView"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("断点调试，查看创建的"),s("code",[t._v("View")]),t._v("视图对象为"),s("code",[t._v("InternalResourceView")]),t._v("对象")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/03/22/VCd79uTnoa3bBWw.png",alt:"image-20220322201800705"}})]),t._v(" "),s("h2",{attrs:{id:"_3、重定向视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、重定向视图"}},[t._v("#")]),t._v(" 3、重定向视图")]),t._v(" "),s("p",[t._v("SpringMVC中默认的重定向视图是"),s("code",[t._v("RedirectView")])]),t._v(" "),s("p",[t._v("创建重定向视图的情况：当控制器方法中所设置的视图名称以"),s("code",[t._v("redirect:")]),t._v("为前缀时，创建"),s("code",[t._v("RedirectView")]),t._v("视图，此时的视图名称不会被 SpringMVC 配置文件中所配置的视图解析器解析，而是会将前缀"),s("code",[t._v("redirect:")]),t._v("去掉，剩余部分作为最终路径通过重定向的方式实现跳转")]),t._v(" "),s("p",[t._v("例如："),s("code",[t._v("forward:/")]),t._v("、"),s("code",[t._v("forward:/viewController/testThymeleaftView")])]),t._v(" "),s("p",[t._v("后台测试代码")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/testRedirect"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testRedirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redirect:/viewController/testThymeleaftView"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("前台测试代码")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("th:")]),t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@{/viewController/testRedirect}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("测试 RedirectView"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("断点调试，查看创建的"),s("code",[t._v("View")]),t._v("视图对象为"),s("code",[t._v("RedirectView")]),t._v("对象")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/03/22/IRZtcW1pUFA6kTx.png",alt:"image-20220322204348222"}})]),t._v(" "),s("h2",{attrs:{id:"_4、转发和重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、转发和重定向"}},[t._v("#")]),t._v(" 4、转发和重定向")]),t._v(" "),s("p",[t._v("转发和重定向的区别")]),t._v(" "),s("ul",[s("li",[t._v("1）转发对于浏览器来说只发送一次请求（另一次请求实际上在服务器内部发生，只是客户端中看不到而已）；重定向对于浏览器来说发送两次请求（不管是转发还是重定向，在服务器中其实都是两次请求）")]),t._v(" "),s("li",[t._v("2）转发在浏览器地址栏中呈现的是发送请求时的地址；重定向在浏览器地址栏中呈现的是重定向后的地址")]),t._v(" "),s("li",[t._v("3）转发时"),s("code",[t._v("request")]),t._v("域对象为同一个；重定向时"),s("code",[t._v("request")]),t._v("域对象不是同一个")]),t._v(" "),s("li",[t._v("4）转发可以访问"),s("code",[t._v("WEB-INF")]),t._v("下资源；重定向不能访问"),s("code",[t._v("WEB-INF")]),t._v("下资源（因为"),s("code",[t._v("WEB-INF")]),t._v("下资源具有安全性、隐藏性，只能通过服务器内部访问，不能通过服务器外部访问）")]),t._v(" "),s("li",[t._v("5）转发不可以跨域；重定向可以跨域（因为转发是在服务器内部发生的，所以只能访问服务器内部资源；而重定向是浏览器发送的两次请求，可以访问任意资源。如可以重定向到某度，但不能转发到某度）")])]),t._v(" "),s("p",[t._v("以表格方式来对比"),s("em",[t._v("转发")]),t._v("和"),s("em",[t._v("重定向")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("页面跳转方式")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("转发")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("重定向")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("请求次数（对浏览器而言）")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1️⃣")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("2️⃣")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("浏览器地址栏地址")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请求地址")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("重定向地址")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("request 域对象是否同一个")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("❌")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("是否可访问 WEB-INF 下资源")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("❌")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("是否可跨域")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("❌")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("✔️")])])])]),t._v(" "),s("h2",{attrs:{id:"_5、视图控制器-view-controller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、视图控制器-view-controller"}},[t._v("#")]),t._v(" 5、视图控制器 view-controller")]),t._v(" "),s("p",[t._v("当前请求映射对应的控制器方法中，仅仅用来实现页面跳转，而没有其他请求过程的处理，即只需设置一个视图名称时，就可以将控制器方法使用"),s("code",[t._v("view-controller")]),t._v("标签进行表示")]),t._v(" "),s("p",[t._v("例如：我们在"),s("code",[t._v("HelloController")]),t._v("中配置的一个控制器方法，对应"),s("code",[t._v("view")]),t._v("请求，返回"),s("code",[t._v("view")]),t._v("视图")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/view"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"view"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("此时通过在SpringmMVC 配置文件中添加"),s("code",[t._v("<mvc:view-controller>")]),t._v("标签，就可以代替上述控制器方法（将上述方法注释即可）")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("view-controller")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("view-name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("view-controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("其中")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("path")]),t._v("对应控制器方法上"),s("code",[t._v("@RequestMapping")]),t._v("中路径")]),t._v(" "),s("li",[s("code",[t._v("view-name")]),t._v("对应控制器方法返回的视图名称")])]),t._v(" "),s("p",[t._v("此时再来访问"),s("code",[t._v("/view")]),t._v("，同样会被"),s("code",[t._v("Thymeleaf")]),t._v("视图解析器解析，拼接上视图前缀和视图后缀后，找到对应路径下的"),s("code",[t._v("view.html")]),t._v("页面")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("注意")]),t._v("：在 SpringMVC 配置文件中配置了"),s("code",[t._v("view-controller")]),t._v("之后，控制器中所有的请求映射都会失效")])]),t._v(" "),s("p",[t._v("测试结果")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/03/22/u8g3hf2kEIynwYl.gif",alt:"动画  (1)"}})]),t._v(" "),s("p",[t._v("怎么解决这个问题呢？我们需要在 SpringMVC 配置文件中开启 MVC 的注解驱动")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n    当SpringMVC中设置任何一个view-controller时，其他控制器中的请求映射将全部失效，\n    此时需要在SpringMVC的核心配置文件中设置开启mvc注解驱动的标签：\n    --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--开启 MVC 的注解驱动--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("annotation-driven")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("测试结果")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/03/22/wfJnQeES5VbxX1K.gif",alt:"动画  (2)"}})]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("额外的")]),t._v("：MVC 的注解驱动功能很多，例如")]),t._v(" "),s("p",[t._v("1、如果加上了默认的 Servlet 处理静态资源（如 JS、CSS 等），控制器请求映射会失效，这时需要配置 MVC 的注解驱动")]),t._v(" "),s("p",[t._v("2、JAVA 对象转换为 JSON 对象，同样需要配置 MVC 的注解驱动")]),t._v(" "),s("p",[t._v("因为使用场景很多，所以一般情况下 MVC 注解驱动默认是需要配置的。但是注意，需要了解在不同情况下 MVC 注解驱动的功能是什么")])]),t._v(" "),s("h2",{attrs:{id:"_6、internalresourceviewresolver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、internalresourceviewresolver"}},[t._v("#")]),t._v(" 6、InternalResourceViewResolver")]),t._v(" "),s("p",[t._v("因为这里是使用"),s("code",[t._v("JSP")]),t._v("作为对"),s("code",[t._v("InternalResourceViewResolver")]),t._v("视图解析器的讲解，所以仅做了解即可")]),t._v(" "),s("p",[t._v("SpringMVC 配置文件：这里使用"),s("code",[t._v("InternalResourceViewResolver")]),t._v("代替"),s("code",[t._v("ThymeleafViewResolver")])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("InternalResourceViewResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframework.web.servlet.view.InternalResourceViewResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/WEB-INF/templates/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("suffix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(".jsp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("后台测试代码")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Controller")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JspController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("前台测试代码")]),t._v(" "),s("p",[s("code",[t._v("index.jsp")])]),t._v(" "),s("div",{staticClass:"language-jsp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n    <head>\n        <title>Jsp</title>\n    </head>\n    <body>\n        <a href="${pageContext.request.contextPath}/success">success.jsp</a>\n    </body>\n</html>\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[s("code",[t._v("success.jsp")])]),t._v(" "),s("div",{staticClass:"language-jsp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n    <head>\n        <title>Success</title>\n    </head>\n    <body>\n        <h1>Success</h1>\n    </body>\n</html>\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("测试结果")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/03/22/YOimhsXNCJEayBx.gif",alt:"动画  (3)"}})]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("本节内容较少，主要掌握")]),t._v(" "),s("ul",[s("li",[t._v("SpringMVC 中默认的视图："),s("code",[t._v("InternalResourceView")]),t._v("、"),s("code",[t._v("RedirectView")]),t._v(" "),s("ul",[s("li",[t._v("使用"),s("code",[t._v("forward:")]),t._v("前缀："),s("code",[t._v("InternalResourceView")]),t._v("视图")]),t._v(" "),s("li",[t._v("使用"),s("code",[t._v("redirect:")]),t._v("前缀："),s("code",[t._v("RedirectView")]),t._v("视图")])])]),t._v(" "),s("li",[s("code",[t._v("Thymeleaf")]),t._v("对应"),s("code",[t._v("ThymeleafView")]),t._v("视图（无任何前缀时），"),s("code",[t._v("jstl")]),t._v("对应"),s("code",[t._v("JstlView")])]),t._v(" "),s("li",[t._v("注意转发和重定向的区别：请求次数、浏览器地址栏地址、"),s("code",[t._v("request")]),t._v("域对象、访问"),s("code",[t._v("WEB-INF")]),t._v("下资源、跨域等方面")]),t._v(" "),s("li",[s("code",[t._v("InternalResourceViewResolver")]),t._v("视图解析器的使用")])]),t._v(" "),s("p",[t._v("附上导图，仅供参考")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/03/22/O1EviFRJZ9p6Dr5.png",alt:"04-SpringMVC 视图"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);