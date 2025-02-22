import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { liteClient as algoliasearch } from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import {
  searchBox,
  hits,
  configure,
  poweredBy,
} from "instantsearch.js/es/widgets";
import "instantsearch.css/themes/reset.css";

// Add styles
const styles = document.createElement("style");
styles.textContent = `
  .ais-InstantSearch {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 0 #0000, 0 0 #0000, 0px 0px 0px 1px rgba(35, 38, 59, 0.05), 0px 1px 3px 0px rgba(35, 38, 59, 0.15);
    background-color: rgb(255 255 255);
  }

  .ais-SearchBox-form {
    position: relative;
  }

  .ais-SearchBox-input {
    width: 100%;
    box-shadow: none;
    border: none;
    padding: 14px 40px;
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    position: absolute;
    top: 0;
    height: 100%;
    background: none;
    border: none;
    appearance: none;
  }

  .ais-SearchBox-submit {
    left: 0;
    width: 40px;
  }

  .ais-SearchBox-reset {
    right: 12px;
  }

  .ais-Hits-item {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    box-shadow: none;
  }

  .ais-Hits-item picture  {
    height: 96px;
    width: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .ais-Hits-item img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .ais-Hits-item p {
    margin-bottom: 0.1rem;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .ais-Hits-item .secondary-text {
    -webkit-line-clamp: 2;
  }

  .ais-Hits-item .primary-text {
    margin-top: 0;
    font-weight: 700;
  }

  .ais-Hits-item .tertiary-text {
    font-size: 0.8rem;
    color: rgb(90, 94, 154);
  }

  .ais-Hits-item mark {
    color: #003dff;
    background-color: #f2f4ff;
    font-style: normal;
  }

  .ais-SearchBox-submitIcon {
    width: 15px;
    height: 15px;
  }

  .border-top {
    border-style: solid;
    border-width: 0;
    border-top-width: 1px;
    border-color: rgb(214 214 231);
  }

  #hits {
    padding: 1rem;
  }

  #algolia-footer {
    display: flex;
    justify-content: flex-end;
    padding: 16px;
  }

  .hide-content {
    display: none !important;
  }
`;
document.head.appendChild(styles);

// Query for any other node in which you want to display the search bar
const searchBarContainer = document.querySelector("body");
const searchBarNode = document.createElement("div");
searchBarNode.setAttribute("class", "ais-InstantSearch");

searchBarNode.innerHTML = `
  <div id="searchbox"></div>
  <div id="hits" class="hide-content"></div>
  <div id="algolia-footer" class="hide-content"></div>
`;

searchBarContainer.prepend(searchBarNode);

const searchClient = algoliasearch(
  "5FYYWUK4F4",
  "e6476b6808afeb8446c9cfd429df36ea",
);

const search = instantsearch({
  indexName: "git_x_cli_net_5fyywuk4f4_articles",
  searchClient,
  onStateChange({ uiState, setUiState }) {
    const hitsContainer = document.querySelector("#hits");
    const footerContainer = document.querySelector("#algolia-footer");

    if (!uiState["git_x_cli_net_5fyywuk4f4_articles"]?.query) {
      hitsContainer.classList.add("hide-content");
      footerContainer?.classList.add("hide-content");
      setUiState(uiState);
      return;
    }

    hitsContainer.classList.remove("hide-content");
    footerContainer?.classList.remove("hide-content");
    setUiState(uiState);
  },
});

search.addWidgets([
  searchBox({
    container: "#searchbox",
    placeholder: "Search your data here",
  }),
  configure({
    hitsPerPage: 3,
  }),
  poweredBy({
    container: "#algolia-footer",
  }),
  hits({
    container: "#hits",
    templates: {
      item: (hit, { html, components }) => html`
        <div>
				  <p class="primary-text">
					  ${components.Highlight({ hit, attribute: "headline" })}
					</p>
				</div>
      `,
    },
  }),
]);

search.start();

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '谈呀',
  description: '',

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: 'https://theme-plume.vuejs.press/favicon-32x32.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    hostname: 'https://git.x-cli.net',

    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',

    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,

    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    // blog: {
    //   postList: true, // 是否启用文章列表页
    //   tags: true, // 是否启用标签页
    //   archives: true, // 是否启用归档页
    //   categories: true, // 是否启用分类页
    //   postCover: 'right', // 文章封面位置
    //   pagination: 15, // 每页显示文章数量
    // },

    /* 博客文章页面链接前缀 */
    // article: '/article/',

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    //   title: true,      // 是否生成标题
    // },

    plugins: {
      'vuepress-plugin-iconify': {
        size: '24px',  // 图标的默认大小
        color: '#42b983',  // 图标的默认颜色
      },
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
      //   // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ['shell', 'bash', 'typescript', 'javascript', 'yml', 'yaml', 'py',],
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      //   twoslash: true, // 启用 twoslash
      //   whitespace: true, // 启用 空格/Tab 高亮
      //   lineNumbers: true, // 启用行号
      },

      /* 本地搜索, 默认启用 */
      search: false,

      /**
       * Algolia DocSearch
       * 启用此搜索需要将 本地搜索 search 设置为 false
       * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
       */
      //docsearch:{
        //appId: '5FYYWUK4F4',
        //apiKey: 'e6476b6808afeb8446c9cfd429df36ea',
        //indexName: 'git',
      //},
      // docsearch: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      // },

      /* 文章字数统计、阅读时间，设置为 false 则禁用 */
      // readingTime: true,

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      // markdownEnhance: {
      //   chartjs: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      // },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        demo: true, 
      //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
      //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
      //   plot: true,         // 启用隐秘文本语法 !!xxxx!!
      //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
      //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
      //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
      //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
      //   icons: true,        // 启用内置图标语法  :[icon-name]:
      //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
      //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
      //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
      //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
      //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
      //   demo: true,         // 启用 demo 容器  ::: demo
      //   repl: {             // 启用 代码演示容器
      //     go: true,         // ::: go-repl
      //     rust: true,       // ::: rust-repl
      //     kotlin: true,     // ::: kotlin-repl
      },
      //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
      // },

      /**
       * 在 Markdown 文件中导入其他 markdown 文件内容。
       * @see https://theme-plume.vuejs.press/guide/markdown/include/
       */
      // markdownInclude: true,

      /**
       * Markdown 数学公式
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
       */
      // markdownMath: {
      //   type: 'katex',
      // },

      /**
       * 水印
       * @see https://theme-plume.vuejs.press/guide/features/watermark/
       */
      // watermark: true,

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   category: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
  }),
})
