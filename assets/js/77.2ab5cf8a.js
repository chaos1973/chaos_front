(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{403:function(t,r,a){"use strict";a.r(r);var e=a(7),o=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("原创")]),t._v(" "),r("h1",{attrs:{id:"java】抽象类详解、抽象类与接口的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java】抽象类详解、抽象类与接口的区别"}},[t._v("#")]),t._v(" Java】抽象类详解、抽象类与接口的区别")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.51cto.com/u_15856491",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zhou_LC"),r("OutboundLink")],1),t._v("2022-11-01 19:58:04博主文章分类："),r("a",{attrs:{href:"https://blog.51cto.com/u_15856491/category17",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java"),r("OutboundLink")],1),t._v("©著作权"),r("br"),r("strong",[r("em",[t._v("文章标签")])]),r("a",{attrs:{href:"https://blog.51cto.com/topic/java.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("java"),r("OutboundLink")],1),r("a",{attrs:{href:"https://blog.51cto.com/topic/chouxianglei.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("抽象类"),r("OutboundLink")],1),r("a",{attrs:{href:"https://blog.51cto.com/topic/zilei.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("子类"),r("OutboundLink")],1),r("a",{attrs:{href:"https://blog.51cto.com/topic/chouxiangfangfa.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("抽象方法"),r("OutboundLink")],1),r("strong",[r("em",[t._v("文章分类")])]),r("a",{attrs:{href:"https://blog.51cto.com/nav/other1",target:"_blank",rel:"noopener noreferrer"}},[t._v("其它"),r("OutboundLink")],1),r("a",{attrs:{href:"https://blog.51cto.com/nav/other",target:"_blank",rel:"noopener noreferrer"}},[t._v("其它"),r("OutboundLink")],1),r("strong",[t._v("_阅读数_65")])]),t._v(" "),r("h3",{attrs:{id:"文章目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文章目录"}},[t._v("#")]),t._v(" 文章目录")]),t._v(" "),r("ul",[r("li",[t._v("什么是抽象类")]),t._v(" "),r("li",[t._v("抽象方法的优点")]),t._v(" "),r("li",[t._v("抽象类和接口的主要区别")])]),t._v(" "),r("h2",{attrs:{id:"什么是抽象类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是抽象类"}},[t._v("#")]),t._v(" 什么是抽象类")]),t._v(" "),r("p",[t._v("例如："),r("br"),t._v("public abstract class A {"),r("br"),t._v("   abstract int add(int x, int y);"),r("br"),t._v("   int sub(int x, int y) { "),r("br"),t._v("      return x - y;"),r("br"),t._v("   }"),r("br"),t._v("}")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("抽象类的类名前加修饰符abstract，可以包含抽象方法")]),t._v("（用abstract修饰，只有方法原型,没有方法的实现），"),r("strong",[t._v("也可以包含非抽象方法，可包含常规类能包含的任何成员")]),t._v("；")]),t._v(" "),r("li",[r("strong",[t._v("抽象类是没有具体实例对象的类，不能使用new方法进行实例化，只能用作超类，只有当子类实现了抽象超类中的所有抽象方法，子类才不是抽象类，才能产生实例，如果子类中仍有抽象方法未实现，则子类也只能是抽象类")]),t._v("；")]),t._v(" "),r("li",[r("strong",[t._v("只有抽象类才可以包含抽象方法")]),t._v("。")])]),t._v(" "),r("h2",{attrs:{id:"抽象方法的优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#抽象方法的优点"}},[t._v("#")]),t._v(" 抽象方法的优点")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("隐藏具体细节信息，所有的子类使用的都是相同的方法原型，其中包含了调用该方法时需要了解的全部信息")]),t._v("；")]),t._v(" "),r("li",[r("strong",[t._v("强迫子类完成指定的行为，规定所有子类的标准行为，是设计模式中的模板方法模式的体现")]),t._v("。")])]),t._v(" "),r("h2",{attrs:{id:"抽象类和接口的主要区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#抽象类和接口的主要区别"}},[t._v("#")]),t._v(" 抽象类和接口的主要区别")]),t._v(" "),r("ul",[r("li",[t._v("抽象类中可以包含普通类的任何成员，也可以包含非抽象方法，主要用于设计模式中的模板方法模式，如果项目设计时，遇到子类需要复用父类的实现方法，或者使用父类的成员变量，但又不希望直接使用父类时，那么可以声明父类为抽象类来解决；")]),t._v(" "),r("li",[t._v("接口在 JDK 的当前版本中，也支持在接口中声明已实现的方法（用 default 关键字），而且接口中的变量，都为 public static final 修饰（可省略），而方法，都为 public abstract 修饰（可省略），但接口的主要用途还是用于约定实现类的“规范”；")]),t._v(" "),r("li",[r("strong",[t._v("总之，如果需要用继承模板方法或变量来实现子类，那么就用抽象类声明父类，否则，只是约定“规范”那么就用接口。")])])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.51cto.com/u_15733182/5733431",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.51cto.com/u_15733182/5733431"),r("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=o.exports}}]);