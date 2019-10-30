(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{17:function(e,n,t){"use strict";t.r(n);var o=t(0),s=t(4);t(220);n.default=function(){console.log(Object(s.useParams)());var e=Object(s.useParams)().fileName;return o.createElement("article",{className:"markdown-body mt20 mb20",dangerouslySetInnerHTML:{__html:t(314)("./".concat(e))}})}},314:function(e,n,t){var o={"./19.10.12-webpack4新手向.md":315,"./19.10.12-新的开始.md":316,"./19.10.15-webpack4+react+babel 踩坑.md":317,"./19.10.18-搭建自己的Github Page.md":318,"./19.10.24-webpack打包优化.md":319,"./19.10.24-贴一个自己的单页面配置.md":320,"./19.10.26-瞎搞webhook.md":321,"./19.10.30-记一道面试题.md":324};function s(e){var n=r(e);return t(n)}function r(e){if(t.o(o,e))return o[e];var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}s.keys=function(){return Object.keys(o)},s.resolve=r,(e.exports=s).id=314},315:function(e,n){e.exports='<h3 id="webpack4新手向">webpack4新手向</h3>\n<p>写自己配置webpack的经历 </p>\n<p>参考资料：<br><a href="https://www.webpackjs.com/guides/">webpack 中文文档 指南栏</a><br><a href="https://webpack.js.org/guides/">webpack 英文文档 指南栏</a><br>ps: 感觉 英文 Configuration 栏 看着舒服 知道 是哪个配置项</p>\n<h4 id="初始化webpack">初始化webpack</h4>\n<p>安装 webpack &amp; webpack-cli</p>\n<pre><code>npm init -y\nnpm install webpack webpack-cli --save-dev</code></pre><p>添加webpack配置文件 webpack.config.js</p>\n<pre><code>const path = require(&#39;path&#39;);\n\nmodule.exports = {\n  entry: &#39;./src/index.js&#39;,\n  output: {\n    filename: &#39;bundle.js&#39;,\n    path: path.resolve(__dirname, &#39;dist&#39;)\n  }\n}</code></pre><p>package.json 的 scripts 中添加 build 命令</p>\n<pre><code>&quot;build&quot;: &quot;webpack --mode production&quot;,</code></pre><p>这样 我们就可以 <em>npm run build</em> 打包我们的代码了</p>\n<p>根据上面的配置:<br>入口文件： <em>src/index.js</em><br>打包后的目录： <em>dist</em>  </p>\n<pre><code>  |- package.json\n+ |- webpack.config.js\n  |- /dist\n    |- bundle.js\n  |- /src\n    |- index.js</code></pre><h4 id="添加html模版">添加html模版</h4>\n<p>我们打包生成的js文件需要配合html文件，可以生成web入口。<br>我们可以通过 webpack的plugins配置项，添加 html-webpack-plugin，生成一个html入口模版</p>\n<p>安装html-webpack-plugin依赖</p>\n<pre><code>npm i html-webpack-plugin -D</code></pre><p>修改webpack.config.js </p>\n<pre><code>const htmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)\n\nmodule.exports = {\n  ...\n  plugins: [\n    new HtmlwebpackPlugin({\n      title: &#39;title 参数 生成的html模板的title。但指定了 template 后 该参数无效！！！&#39;\n      filename: &#39;xxxx.html&#39;,   // build后html文件名\n      template: &#39;./src/index.html&#39;  // 入口html文件模板，不指定的话，会默认生成 一个html模版\n    })\n  ]\n}</code></pre><p><em>基本模版内容仅供参考</em>\n需放到上面配置的template对应目录</p>\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n  &lt;meta charset=&quot;UTF-8&quot;&gt;\n  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;\n  &lt;title&gt;React App&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre><p>打包后的文件结构</p>\n<pre><code>  |- package.json\n  |- webpack.config.js\n  |- /dist\n    |- bundle.js\n  + |- xxx.html\n  |- /src\n    |- index.js</code></pre><h4 id="可以开始开发react了">可以开始开发React了</h4>\n<p>webpack-dev-server登场</p>\n<pre><code>npm i webpack-dev-server --save-dev</code></pre><p>安装React &amp; React-Dom</p>\n<pre><code>npm i react react-dom -S</code></pre><p>package.json 的 scripts 中添加 start 命令</p>\n<pre><code>&quot;start&quot;: &quot;webpack-dev-server --mode development --open --hot&quot;,</code></pre><p>这样 我们就可以 <em>npm start</em> 本地开发我们的项目了</p>\n<p>在src下 添加以下文件看看效果吧\n<em>src/index.js</em></p>\n<pre><code>import React from &#39;react&#39;\nimport ReactDOM from &#39;react-dom&#39;\nimport App from &#39;./components/app&#39;\n\nReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;app&#39;))</code></pre><p><em>src/components/app.js</em></p>\n<pre><code>import React, { Component } from &#39;react&#39;\n\nexport default class App extends Component {\n  render() {\n    return (\n      &lt;div&gt;\n        test \n      &lt;/div&gt;\n    )\n  }\n}</code></pre><h4 id="添加-babel">添加 babel</h4>\n<p>安装依赖 <em>@babel/core @babel/preset-env @ bable/preset-react</em></p>\n<pre><code>npm install --save-dev @babel/core @babel/preset-env @ bable/preset-react</code></pre><p>添加 .babelrc 配置文件</p>\n<pre><code>// targets, useBuiltIns 等选项用于编译出兼容目标环境的代码\n// 其中 useBuiltIns 如果设为 &quot;usage&quot;\n// Babel 会根据实际代码中使用的 ES6/ES7 代码，以及与你指定的 targets，按需引入对应的 polyfill\n// 而无需在代码中直接引入 import &#39;@babel/polyfill&#39;，避免输出的包过大，同时又可以放心使用各种新语法特性。\n// 还需要指定corejs 版本\n{\n  &quot;presets&quot;: [\n    [\n      &quot;@babel/preset-env&quot;,\n      {\n        {\n          &quot;modules&quot;: false,\n          &quot;targets&quot;: {\n            &quot;browsers&quot;: [&quot;&gt; 1%&quot;, &quot;last 2 versions&quot;, &quot;not ie &lt;= 8&quot;]\n          },\n          &quot;useBuiltIns&quot;: &quot;usage&quot;,\n          &quot;corejs&quot;: 2\n        } \n      }\n    ],\n    &quot;@babel/preset-react&quot;\n  ]\n}</code></pre>'},316:function(e,n){e.exports='<h4 id="新的开始">新的开始</h4>\n<ul>\n<li>拥抱变化</li>\n<li>满怀信心</li>\n<li>HAPPY </li>\n</ul>\n'},317:function(e,n){e.exports='<h3 id="webpack4reactbabel-踩坑">webpack4+react+babel 踩坑</h3>\n<p>自己踩坑的经历 </p>\n<h4 id="react-router">react-router</h4>\n<p>issue: 定义的 BrowserRouter, 路由刷新 报 cannot get /xxx</p>\n<p>answer:  </p>\n<ul>\n<li><p>本地webpack 配置 </p>\n<pre><code>devServer: {\n  historyApiFallback: true,\n}</code></pre><p><em>只适合开发环境中进行配置</em>\n<em>线上环境需要服务器支持</em></p>\n</li>\n<li><p>BrowserRouter 改为 HashRouter   </p>\n<ol>\n<li>路由会有 # 号，影响美观</li>\n<li>不能使用服务器渲染</li>\n</ol>\n</li>\n</ul>\n<h4 id="babel7">Babel7</h4>\n<p>issue: Support for the experimental syntax &#39;classProperties&#39; isn&#39;t currently enabled </p>\n<p>answer: </p>\n<pre><code>npm i -D @babel/plugin-proposal-class-properties\n\n\n配置.babelrc \n\n{ \n  &quot;plugins&quot;: [ \n    [\n      &quot;@babel/plugin-proposal-class-properties&quot;, \n      { &quot;loose&quot;: true }\n    ] \n  ] \n}   \n</code></pre><p>issue: babel 在每个文件都插入了辅助代码，使代码体积过大！</p>\n<p>answer: </p>\n<pre><code>你必须执行 \nnpm install @babel/plugin-transform-runtime --save-dev 来把它包含到你的项目中，也要使用 \nnpm install babel-runtime --save-dev 把 babel-runtime 安装为一个依赖\n\n修改.babelrc\n\n&quot;plugins&quot;: [\n  ...\n  &quot;@babel/transform-runtime&quot;,\n  ...\n]</code></pre><p>issue: this.setDynamic is not a function</p>\n<p>answer: </p>\n<pre><code>babel7-\nnpm install babel-plugin-transform-runtime --save-dev\n\nbabel7+ 插件 修改\nnpm install @babel/plugin-transform-runtime --save-dev</code></pre>'},318:function(e,n){e.exports='<h3 id="搭建自己的github-page">搭建自己的Github Page</h3>\n<p>有两种方式</p>\n<ul>\n<li><p>创建一个 username.github.io repo<br>创建一个 index.md / index.html\n路径 在  <code>https://username.github.io</code></p>\n</li>\n<li><p>创建一个 xxx repo<br>创建一个 index.md / index.html<br>setting 下 选择 github page 打开 page 功能\n路径 在  <code>https://username.github.io/xxx</code></p>\n</li>\n</ul>\n<blockquote>\n<p>master 分支下 默认 读取 index 文件 作为 根路由。</p>\n</blockquote>\n<blockquote>\n<p>Github Page 的路由规则 是 托管 master 根目录下的 xxx.md(html)，对应 <code>https://username.github.io/xxx</code>。 </p>\n</blockquote>\n<blockquote>\n<p>index除外，index文件默认根路由。</p>\n</blockquote>\n<h4 id="这样我们-就可以-将我们-通过脚手架-build-后的文件-托管到-git-查看效果了">这样我们 就可以 将我们 通过脚手架 build 后的文件 托管到 git 查看效果了</h4>\n<p>我们的 单页面应用 路由 建议使用 HashRouter，因为 BroswerRouter 有问题</p>\n<p>ps: 等着看看是否解决 和 如何解决</p>\n<h4 id="我的经验">我的经验</h4>\n<h5 id="stage-1-本着各各代码库-各司其职的原则">stage 1: 本着各各代码库 各司其职的原则</h5>\n<pre><code>step 1:\n\ngit clone https://github.com/xxx/xxx.github.io.git  \n初始化 我们的 Github Pages 的本地库  \n\nstep 2:\n\n新建另一个开发代码库   \n初始化 开发框架 开发完 npm run build 生成 dist 目录\n\nstep 3:\n\n将 dist 目录下 的 文件 复制到 Github Page 库下 更新</code></pre><p><em>我的心路历程@1</em>  </p>\n<blockquote>\n<p>init github-page-repo -&gt; init work-repo -&gt; work done -&gt; build -&gt; move dist to github-page-repo -&gt; update</p>\n</blockquote>\n<p>大写的心累</p>\n<h5 id="stage-2-聪明一点的我，把开发库改成了-github-page-库下的-开发分支">stage 2: 聪明一点的我，把开发库改成了 Github Page 库下的 开发分支</h5>\n<pre><code>step 1:\n\ngit clone https://github.com/xxx/xxx.github.io.git  \n初始化 我们的 Github Pages 的本地库  \n\nstep 2:\ngit checkout -b dev\n新建另一个开发分支 \n初始化 开发框架 开发完 npm run build 生成 dist 目录\n\nstep 3:\n\n将 dist 目录下 的 文件 复制到 master 分支 更新</code></pre><p><em>我的心路历程@2</em></p>\n<blockquote>\n<p>init github-page-repo -&gt; checkout dev-branch -&gt; work done -&gt; build -&gt; move dist to master -&gt; update</p>\n</blockquote>\n<p>虽然依旧心累但是 只维护 一个库 不用 切文件夹 了，但是要切分支</p>\n<p><em>我的心路历程@2.1</em></p>\n<p>干嘛不用个脚本！！！</p>\n<blockquote>\n<p>添加 deploy.sh 一键 ./deploy.sh 部署发布</p>\n</blockquote>\n<pre><code class="language-shell">npm run build\ngit checkout master\nrm -rf index.html\nrm -rf *.js\nrm -rf *.css\nmv dist/* ./\ngit add .\ngit commit -m &#39;commit message&#39;\ngit push origin master\ngit checkout dev</code></pre>\n<p>Because of Lan, I become stronger!!!</p>\n'},319:function(e,n){e.exports='<h3 id="webpack-配置打包优化">webpack 配置打包优化</h3>\n<h4 id="样式提取及压缩">样式提取及压缩</h4>\n<p><em>mini-css-extract-plugin</em> 将css文件提取成一个文件\n<em>optimize-css-assets-webpack-plugin</em> 压缩css文件</p>\n<pre><code>mini-css-extract-plugin 将css文件提取成一个文件\n\nconst MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;) // css 并合并成 文件\n\nmodule: {\n  rules: [\n    {\n      test: /\\.(le|c)ss$/,\n      use: [\n        // 添加 环境判断 变量 只有生产环境 使用 MiniCssExtractPlugin\n        isDEV ? &#39;style-loader&#39; : MiniCssExtractPlugin.loader,\n        &#39;css-loader&#39;, \n        { \n          loader: &#39;postcss-loader&#39;,\n          options: {\n            plugins: loader =&gt; [\n              require(&#39;autoprefixer&#39;)(), // CSS浏览器兼容 需要package.json 添加 对应的 browserslist,也有其他方式，自行搜索\n            ]\n          }\n        },\n        `less-loader?{&quot;sourceMap&quot;:true, &quot;modifyVars&quot;:${JSON.stringify(theme)}, &quot;javascriptEnabled&quot;: true}`,\n      ], // 注意排列顺序，执行顺序与排列顺序相反\n    },\n  ],\n}\n\nplugins: [\n  ...,\n  ...(isDEV ? \n    []\n    : [\n      new MiniCssExtractPlugin({\n        filename: &#39;[name].css&#39;,\n        // 将相关模块的 样式分离，生成不同的文件，按需加载 css下载变小，加快页面加载\n        chunkFilename: &#39;[name].[contenthash].css&#39; \n      }),\n    ]\n  ),\n  ...,\n],\n\noptimize-css-assets-webpack-plugin 压缩css文件\n\noptimization: {\n  minimizer: [\n    // 混淆 js\n    new UglifyJsPlugin({\n      uglifyOptions: {\n        compress: {\n          drop_console: true,\n        },\n        ecma: 5,\n      },\n      cache: true,\n      parallel: true,\n      sourceMap: true,\n    }),\n    // 压缩css\n    new OptimizeCSSAssetsPlugin({\n      assetNameRegExp: /\\.css$/g,\n      cssProcessorOptions: {\n        // const safeParser = require(&#39;postcss-safe-parser&#39;) 添加前缀的规则\n        parser: safeParser, \n        discardComments: {\n          removeAll: true,\n        },\n      },\n    }),\n  ],\n},</code></pre><h4 id="js模块打包拆分">js模块打包拆分</h4>\n<h5 id="commonjs-提取">common.js 提取</h5>\n<pre><code>optimization: {\n  splitChunks: {\n    cacheGroups: {\n      common: {\n        test: /[\\\\/]node_modules[\\\\/] || src\\//,\n        chunks: &#39;all&#39;,\n        name: &#39;common&#39;,\n        minSize: 0,\n        minChunks: 2,\n        priority: 10, //优先级\n        enforce: true,\n      },\n    },\n  },\n}</code></pre><h5 id="react、react-dom、react-router-dom-等公用模块-走cdn">react、react-dom、react-router-dom 等公用模块 走CDN</h5>\n<blockquote>\n<p>将我们用到的依赖 通过外部cdn的方式引入，打包时不打包，减少打包体积大小，将它们从package.json里面删掉</p>\n</blockquote>\n<pre><code>externals: {\n  react: &#39;React&#39;,\n  &#39;react-dom&#39;: &#39;ReactDOM&#39;,\n  &#39;react-router-dom&#39;: &#39;ReactRouterDOM&#39;,\n},\nplugins: [\n  ...,\n  new HtmlWebpackPlugin({\n    jsCdns: [\n      &#39;https://cdn.jsdelivr.net/npm/react@16.10.2/umd/react.production.min.js&#39;,\n      &#39;https://cdn.jsdelivr.net/npm/react-dom@16.10.2/umd/react-dom.production.min.js&#39;,\n      &#39;https://cdn.jsdelivr.net/npm/react-router-dom@5.1.2/umd/react-router-dom.min.js&#39;,\n    ],\n    template: &#39;./template/index.html&#39;,\n    minify: {\n      collapseWhitespace: true, // 折叠空白\n      removeComments: true, // 移除注释\n      removeAttributeQuotes: true // 移除属性的引号\n    }\n  }),\n  ...,\n],</code></pre><p><em>模版对应修改</em></p>\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n  &lt;meta charset=&quot;UTF-8&quot;&gt;\n  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;\n  &lt;title&gt;suyunlonsy&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;\n\n  &lt;% htmlWebpackPlugin.options.jsCdns.map(item =&gt; {{ %&gt;\n    &lt;script type=&quot;text/javascript&quot; src=&quot;&lt;%= item %&gt;&quot;&gt;&lt;/script&gt;\n  &lt;% }}) %&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre><h4 id="配置-resolve-优化-加载解析速度">配置 resolve 优化 加载解析速度</h4>\n<pre><code>resolve: {\n  alias: {\n    src: resolve(&#39;src&#39;),\n    common: resolve(&#39;src/common&#39;),\n    images: resolve(&#39;src/images&#39;),\n    markdowns: resolve(&#39;src/markdowns&#39;),\n    mods: resolve(&#39;src/components&#39;),\n  },\n  extensions: [&#39;.js&#39;, &#39;.jsx&#39;, &#39;css&#39;]\n},</code></pre>'},320:function(e,n){e.exports='<h3 id="公示鞭尸">公示鞭尸</h3>\n<pre><code>const path = require(&#39;path&#39;)\nconst webpack = require(&#39;webpack&#39;)\nconst HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;) // html模版\nconst UglifyJsPlugin = require(&#39;uglifyjs-webpack-plugin&#39;) // 混淆代码\nconst MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;) // 压缩 css 并合并成 文件\nconst OptimizeCSSAssetsPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;) // 压缩css &amp; 去除注释  \nconst { CleanWebpackPlugin } = require(&#39;clean-webpack-plugin&#39;) // 删除 旧的文件 \nconst safeParser = require(&#39;postcss-safe-parser&#39;) // 添加前缀的规则\n\nconst HOST = &#39;127.0.0.1&#39;\nconst PORT = &#39;8080&#39;\n\nmodule.exports = (env, argv) =&gt; {\n  const { \n    mode,  // 通过 mode 判断 开发 和 生产\n  } = argv\n\n  const resolve = dir =&gt; path.join(__dirname, dir)\n\n  const theme = resolve(&#39;theme.js&#39;)\n\n  const isDEV = mode === &#39;development&#39;\n\n  return {\n    devServer: {\n      contentBase: [resolve(&#39;node_modules&#39;)],\n      compress: true,\n      inline: true,\n      hot: true,\n      port: PORT,\n      host: HOST,\n      headers: {\n        &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;,\n      },\n      noInfo: true,\n      historyApiFallback: {\n        disableDotRule: true\n      },\n      open: false,\n      quiet: false,\n      overlay: {\n        errors: true\n      },\n    },\n    entry: &#39;./src/index.js&#39;,\n    output: {\n      path: resolve(&#39;dist&#39;),\n      filename: &#39;[name].js&#39;,\n      chunkFilename: isDEV ? &#39;[name].chunk.js&#39; : &#39;[name].[contenthash].js&#39;,\n      publicPath: &#39;/&#39;,\n    },\n    optimization: {\n      splitChunks: {\n        cacheGroups: {\n          common: {\n            test: /[\\\\/]node_modules[\\\\/] || src\\//,\n            chunks: &#39;all&#39;,\n            name: &#39;common&#39;,\n            minSize: 0,\n            minChunks: 2,\n            priority: 10, //优先级\n            enforce: true,\n          },\n        },\n      },\n      minimizer: [\n        new UglifyJsPlugin({\n          uglifyOptions: {\n            compress: {\n              drop_console: true,\n            },\n            ecma: 5,\n          },\n          cache: true,\n          parallel: true,\n          sourceMap: true,\n        }),\n        new OptimizeCSSAssetsPlugin({\n          assetNameRegExp: /\\.css$/g,\n          cssProcessorOptions: {\n            parser: safeParser,\n            discardComments: {\n              removeAll: true,\n            },\n          },\n        }),\n      ],\n    },\n    resolve: {\n      alias: {\n        src: resolve(&#39;src&#39;),\n        common: resolve(&#39;src/common&#39;),\n        images: resolve(&#39;src/images&#39;),\n        markdowns: resolve(&#39;src/markdowns&#39;),\n        mods: resolve(&#39;src/components&#39;),\n      },\n      extensions: [&#39;.js&#39;, &#39;.jsx&#39;, &#39;css&#39;]\n    },\n    externals: {\n      react: &#39;React&#39;,\n      &#39;react-dom&#39;: &#39;ReactDOM&#39;,\n      &#39;react-router-dom&#39;: &#39;ReactRouterDOM&#39;,\n    },\n    module: {\n      rules: [\n        {\n          test: /\\.js$/,\n          include: resolve(&#39;src&#39;),\n          exclude: /node_modules/,\n          use: [&#39;babel-loader?cacheDirectory&#39;],\n        },\n        {\n          test: /\\.(le|c)ss$/,\n          use: [\n            isDEV ? &#39;style-loader&#39; : MiniCssExtractPlugin.loader,\n            &#39;css-loader&#39;, \n            { \n              loader: &#39;postcss-loader&#39;,\n              options: {\n                plugins: loader =&gt; [\n                  require(&#39;autoprefixer&#39;)(), // CSS浏览器兼容 需要package.json 添加 对应的 browserslist,也有其他方式，自行搜索\n                ]\n              }\n            },\n            `less-loader?{&quot;sourceMap&quot;:true, &quot;modifyVars&quot;:${JSON.stringify(theme)}, &quot;javascriptEnabled&quot;: true}`,\n          ], // 注意排列顺序，执行顺序与排列顺序相反\n        },\n        {\n          test: /\\.styl$/,\n          use: [\n            isDEV ? &#39;style-loader&#39; : MiniCssExtractPlugin.loader,\n            &#39;css-loader&#39;,\n            { \n              loader: &#39;postcss-loader&#39;,\n              options: {\n                plugins: loader =&gt; [\n                  require(&#39;autoprefixer&#39;)(), // CSS浏览器兼容 需要package.json 添加 对应的 browserslist,也有其他方式，自行搜索\n                ]  \n              },\n            },\n            &#39;stylus-loader&#39;,\n          ],\n          include: [path.resolve(__dirname, &#39;src&#39;)],\n          exclude: /node_modules/,\n        }, \n        {\n          test: /\\.(jpg|jpeg|png|gif|svg)$/,\n          use: {\n            loader: &#39;url-loader&#39;,\n            options: {\n              limit: 1024 * 8, // 8k以下的base64内联，不产生图片文件\n              fallback: &#39;file-loader&#39;, // 8k以上，用file-loader抽离（非必须，默认就是file-loader）\n              name: &#39;[name].[ext]?[hash]&#39;, // 文件名规则，默认是[hash].[ext]\n              outputPath: &#39;images/&#39;, // 输出路径\n              publicPath: &#39;&#39;  // 可访问到图片的引用路径(相对/绝对)\n            }\n          }\n        }, \n        {\n          test: /\\.md$/,\n          use: [\n            &#39;html-loader&#39;, \n            &#39;markdown-loader&#39;\n          ]\n        }\n      ]\n    },\n    plugins: [\n      new HtmlWebpackPlugin({\n        jsCdns: [\n          &#39;https://cdn.jsdelivr.net/npm/react@16.10.2/umd/react.production.min.js&#39;,\n          &#39;https://cdn.jsdelivr.net/npm/react-dom@16.10.2/umd/react-dom.production.min.js&#39;,\n          &#39;https://cdn.jsdelivr.net/npm/react-router-dom@5.1.2/umd/react-router-dom.min.js&#39;,\n        ],\n        template: &#39;./template/index.html&#39;,\n        minify: {\n          collapseWhitespace: true, // 折叠空白\n          removeComments: true, // 移除注释\n          removeAttributeQuotes: true // 移除属性的引号\n        }\n      }),\n      ...(isDEV ? \n        []\n        : [\n          new CleanWebpackPlugin({\n            cleanOnceBeforeBuildPatterns: [path.join(__dirname, &#39;dist&#39;)]\n          }),\n          new MiniCssExtractPlugin({\n            filename: &#39;[name].css&#39;,\n            chunkFilename: &#39;[name].[contenthash].css&#39;\n          }),\n        ]\n      ),\n    ],\n  }\n}</code></pre>'},321:function(e,n,t){e.exports='<h4 id="瞎搞webhook">瞎搞webhook</h4>\n<blockquote>\n<p>Webhooks是GitHub提供的一个API。Webhooks可以在GitHub仓库(repositories)发生事件(比如提交代码,创建分支，发布版本)时，通知到其他服务器。Webhook实质上就是一个callback</p>\n</blockquote>\n<h5 id="在github中设置项目的webhook">在GitHub中设置项目的webhook</h5>\n<ol>\n<li><p>进入 GitHub 代码库，依次点击「Settings」、「Webhooks &amp; Services」、「Add Webhook」\n<img src="'+t(322)+'" alt="alt 仓库setting页"></p>\n</li>\n<li><p>填入对应的Webhook地址，即可完成配置\n<img src="'+t(323)+'" alt="alt 仓库setting页"></p>\n</li>\n</ol>\n<h5 id="神奇的工具">神奇的工具</h5>\n<p><a href="https://ngrok.com/">公网映射工具 ngrok</a></p>\n'},322:function(e,n,t){e.exports=t.p+"images/webhook-setting.jpg?3dff130d5bae83e8a8a3649650259cec"},323:function(e,n,t){e.exports=t.p+"images/webhook-config.jpeg?14a9fc8c5f84688f548f339d3d3e0f22"},324:function(e,n){e.exports='<pre><code>// 题目：\n// 以 provinces 为数据源，设计并实现区域选择组件 RegionSelect\n// 要求：确保 Demo 能够正常使用 RegionSelect\n// 具体包含：\n// 1. Demo 向 RegionSelect 传值能够正确渲染\n// 2. Demo 中的 handleRegionChange 能够正确输出\n// 3. 考虑 RegionSelect 组件的通用性\n\nimport React, { Component } from &quot;react&quot;;\nimport ReactDOM from &quot;react-dom&quot;;\nimport &quot;antd/dist/antd.css&quot;;\nimport &quot;./index.css&quot;;\nimport { Select } from &quot;antd&quot;;\n\nconst { Option } = Select;\n\nconst provinces = [\n  {\n    name: &quot;浙江省&quot;,\n    code: 1,\n    cities: [\n      {\n        name: &quot;杭州市&quot;,\n        code: 11,\n        areas: [{ name: &quot;西湖区&quot;, code: 111 }, { name: &quot;余杭区&quot;, code: 112 }]\n      },\n      {\n        name: &quot;宁波市&quot;,\n        code: 12,\n        areas: [{ name: &quot;江北区&quot;, code: 121 }, { name: &quot;江东区&quot;, code: 122 }]\n      }\n    ]\n  },\n  {\n    name: &quot;广东省&quot;,\n    code: 2,\n    cities: [\n      {\n        name: &quot;广州市&quot;,\n        code: 21,\n        areas: [{ name: &quot;白云区&quot;, code: 211 }, { name: &quot;天河区&quot;, code: 212 }]\n      },\n      {\n        name: &quot;深圳市&quot;,\n        code: 22,\n        areas: [{ name: &quot;宝安区&quot;, code: 221 }, { name: &quot;南山区&quot;, code: 222 }]\n      }\n    ]\n  }\n];\n\n// 完善组件功能\nclass RegionSelect extends Component {\n  render() {\n    return (\n      &lt;div&gt;\n        &lt;Select /&gt;省\n        &lt;Select /&gt;市\n        &lt;Select /&gt;区\n      &lt;/div&gt;\n    );\n  }\n}\n\n// 确保 RegionSelect 在以下 Demo 中能够正常运行\nclass Demo extends Component {\n  state = {\n    value: [1, 11, 111]\n  };\n\n  handleRegionChange(value) {\n    console.log(value);\n  }\n\n  render() {\n    const { value } = this.state;\n    return &lt;RegionSelect value={value} /&gt;;\n  }\n}\n\nReactDOM.render(&lt;Demo /&gt;, document.getElementById(&quot;container&quot;));\n</code></pre><p><a href="http://suyunlongsy.github.io/#/region-select">自己写的组件</a></p>\n'}}]);