[//]: <> ({createTime:'2018-01-31T01:46:36.418Z'})

# JavaScript Testing - AVA setup


[官方github](https://github.com/avajs/ava)

## 1. add AVA to your project 

```bash
 $ npm install --global ava
 
 $ ava --init 
```

运行上述命令后会在package.json里生成ava的依赖以及test的script
```json
{
    // ...
	"scripts": {
		"test": "ava"
	},
	"devDependencies": {
		"ava": "^0.20.0"
	}
	// ...
}

```

当然你也可以手动安装ava，然后配置package.json

## 2.创建测试文件

默认在project root 文件下载创建test.js

```ecmascript 6
import test from 'ava'

test('first test',t=>{
    t.pass();
})

```

当然你可以通过配置指定test的文件夹,在package.json里加入ava配置

```json
{
 //...
  "ava": {
    "files": [
      "./test/unittest/specs/**/*.js",
      "!./test/unittest/specs/ignored.js"
    ]
  }
// ...
}
```

通过！匹配需要忽略的文件

## 3.run test

```bash
$ npm test
```

that's all!

## 4. 一些tips

在官方的配置中，有一个require的配置。是在跑测试之前加载必要项。

比如你的application使用vue,es6,element-ui或者一些其他的框架或组件，就可以通过require引入这些配置。

```json
{
 //...
  "ava": {
    "files": [
      "./test/unittest/specs/**/*.js",
      "!./test/unittest/specs/ignored.js"
    ],
    "require": [
      "./test/unittest/helpers/setup.js"
    ]
  },
// ...
}
```

setup.js

```ecmascript 6
// Setup browser environment
require('browser-env')();

const hooks = require('require-extension-hooks'),
    Vue = require('vue'),
    ElementUI = require('element-ui');

Vue.use(ElementUI);

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push();
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).plugin('babel').push();
```

最后附上我学习AVA时的练手[repo](https://github.com/shenjo/Javascript_test_study/tree/master/AVA)




