# my-nuxt-learn

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install*[see note below]

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

*Note: Due to a bug in yarn's engine version detection code if you are
using a prerelease version of Node (i.e. v7.6.0-rc.1) you will need to either:
  1. Use `npm install`
  2. Run `yarn` with a standard release of Node and then switch back

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

nuxt-koa脚手架启动问题
问题1：in ./server/index.js**
        Module build failed: Error: Plugin/Preset files are not allowed to export objects, only functions. In /Users/ygh/stack/source/chapter-5/node_modules/backpack-core/babel.js

解决方案：npm install nuxt@1.4.2 最新版本会有问题，降级到1.4.2**
-----------------------------
下载koa脚手架
npm install -g koa-generator
koa2 project_name
-----------------------------
启动redis服务：redis-server
连接redis：redis-cli
查看redis：
	查看key：keys *
	查看值： get ...
-----------------------------
nuxt 安装脚手架
vue init nuxt-community/koa-template nuxt-learn

vscode格式化插件：Prettier formatter
"prettier.singleQuote": true, （设置格式化为单引号）
"prettier.semi": false（设置格式化去掉分号）
-----------------------------
美团nuxt项目
项目环境
node 8.12.0
vue  2.5.17
npm  6.4.1
webpack  4.19.1
nuxt 2.0.0

项目安装
npm install -g npx
npx create-nuxt-app project-name

