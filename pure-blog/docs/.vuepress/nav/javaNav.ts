// Java导航栏
export default {
  text: 'Java', link: '/java/',  // 目录页链接，此处 link 是 vdoing 主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  items: [
    {
      text: 'java基础',
      items: [
        { text: 'Java基础', link: '/java/se/' },
        { text: 'Java集合', link: '/java/collection/' },
        { text: 'Java反射', link: '/java/se/reflect/' },
        { text: 'JavaJUC', link: '/java/juc/' },
        { text: 'JavaJVM', link: '/java/jvm/' },
      ]
    },
    {
      text: 'Java容器',
      items: [
        { text: 'JavaWeb', link: '/javaweb/concept/' },
      ]
    },
    {
      text: 'Java版本新特性',
      items: [
        { text: 'Java新特性', link: '/java/new-features/' },
      ]
    },
    {
      text: 'RestTemplate应用',
      items: [
        { text: 'RestTemplate设置请求头和请求体', link: '/resttemplate/request/' },
        { text: 'RestTemplate设置连接池', link: '/resttemplate/pool/' },
      ]
    },
    {
      text: 'java知识总结',
      items: [
        { text: 'CyclicBarrier使用详解', link: '/javaCategory/15/' },
        { text: 'Semaphore 使用及原理', link: '/javaCategory/16/' },
      ]
    },
  ]
}