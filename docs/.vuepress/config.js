const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');


module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)

  title: "zeyu 文档",
  description: 'ZeYu 微服务项目文档',
  base: '/zeyu/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'zeyu,微服务,vuepress,技术文档,springcloud' }],
    ['meta', { name: 'theme-color', content: '#2A3F5F' }], // 移动浏览器主题颜色

  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目指南',  items: [
        { text: '项目介绍', link: '/项目指南/project/' },
        { text: '项目架构', link: '/项目指南/arch/' },
        { text: '技术选型', link: '/项目指南/tech/' },
      ]},
      { text: '后端服务',  items: [
        { text: '后端介绍', link: '/后端服务/backIntroduce/' },
        { text: '服务启动', link: '/后端服务/backStart/' },
        { text: 'Gateway服务', link: '/后端服务/gateway/' },
        { text: 'base服务', link: '/后端服务/base/' },
      ]},
      { text: '前端服务',  items: [
        { text: '框架介绍', link: '/前端服务/webIntroduce/' },
        { text: '服务启动', link: '/前端服务/webStart/' },
      ]},
      { text: '运维管理',  items: [
        { text: '项目部署', link: '/运维管理/deploy/' },
        { text: '监控', link: '/运维管理/monitor/' },
      ]},
      { text: '技术学习',  items: [
        { text: 'Linux', link: '/技术学习/linux/' },
        { text: '日志', link: '/技术学习/log/' },
      ]},
      { text: '项目仓库',  items: [
        { text: 'Gitee', link: '/项目仓库/gitee/' },
        { text: 'GitHub', link: '/项目仓库/github/' },
      ]},

     
    ], 

    sidebar: {
      '/项目指南/project/': [
        {
          text: '项目介绍',
          collapsible: true,
          prefix: '项目指南/project/',
          children: [
            '项目介绍.md',
            '项目目录.md',

          ]
        }
      ],
      '/项目指南/arch/': [
        {
          text: '项目架构',
          collapsible: true,
          prefix: '项目指南/arch/', 
          children: [
            '项目架构.md',
          ]
        }
      ],
      '/项目指南/tech/': [
        {
          text: '技术选型',
          collapsible: true,
          prefix: '项目指南/tech/',
          children: [
            '技术选型.md',
          ]
        }
      ],
      '/后端服务/backIntroduce/': [
        {
          text: '后端介绍',
          collapsible: true,
          prefix: '后端服务/backIntroduce/',
          children: [
            '后端介绍.md',
          ]
        }
      ],
      '/后端服务/backStart/': [
        {
          text: '服务启动',
          collapsible: true,
          prefix: '后端服务/backStart/',
          children: [
            '服务启动.md',
          ]
        }
      ],
      '/后端服务/gateway/': [
        {
          text: 'Gateway服务',
          collapsible: true,
          prefix: '后端服务/gateway/',
          children: [
            'gateway.md',
          ]
        }
      ],
      '/后端服务/base/': [
        {
          text: 'base服务',
          collapsible: true,
          prefix: '后端服务/base/',
          children: [
            'base.md',
          ]
        }
      ],
      '/前端服务/webIntroduce/': [
        {
          text: '框架介绍',
          collapsible: true,
          prefix: '前端服务/webIntroduce/',
          children: [
            '框架介绍.md',
          ]
        }
      ],
      '/前端服务/webStart/': [
        {
          text: '服务启动',
          collapsible: true,
          prefix: '前端服务/webStart/',
          children: [
            '服务启动.md',
          ]
        }
      ],
      '/运维管理/deploy/': [
        {
          text: '项目部署',
          collapsible: true,
          prefix: '运维管理/deploy/',
          children: [
            '项目部署.md',
          ]
        }
      ],
      '/运维管理/monitor/': [
        {
          text: '监控',
          collapsible: true,
          prefix: '运维管理/monitor/',
          children: [
            '监控.md',
          ]
        }
      ],
      '/技术学习/linux/': [
        {
          text: '监控',
          collapsible: true,
          prefix: '技术学习/linux/',
          children: [
            'Linux.md',
          ]
        }
      ],
      '/技术学习/log/': [
        {
          text: '日志',
          collapsible: true,
          prefix: '技术学习/log/',
          children: [
            '日志.md',
          ]
        }
      ],
      '/项目仓库/gitee/': [
        {
          text: 'Gitee',
          collapsible: true,
          prefix: '项目仓库/gitee/',
          children: [
            'Gitee.md',
          ]
        }
      ],
      '/项目仓库/github/': [
        {
          text: 'GitHub',
          collapsible: true,
          prefix: '项目仓库/github/',
          children: [
            'GitHub.md',
          ]
        }
      ],
    },
  
    
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.gif', // 导航栏logo
    repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
     //sidebar: { mode: 'structuring', collapsable: true }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'ZeYu', // 必需
      href: 'https://github.com/xugaoyi' // 可选的
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:894072666@qq.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/xugaoyi'
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2025, // 博客创建年份
      copyrightInfo: 'Evan Xu | MIT License', // 博客版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],

    ['fulltext-search'], // 全文搜索

    // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    //   thirdparty: [ // 可选，默认 []
    //     {
    //       title: '在GitHub中搜索',
    //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
    //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在npm中搜索',
    //       frontUrl: 'https://www.npmjs.com/search?q=',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q='
    //     }
    //   ]
    // }],

    // [
    //   'vuepress-plugin-baidu-tongji', // 百度统计
    //   {
    //     hm: baiduCode || '01293bffa6c3962016c08ba685c79d78'
    //   }
    // ],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],

  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}
