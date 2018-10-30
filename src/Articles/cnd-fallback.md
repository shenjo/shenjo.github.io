[//]: <> ({createTime:'2017-11-22T07:42:17.822Z'})

#cnd fallback

在开发过程中经常会用到一些静态资源(js/css/etc..),但在production环境往往会用cdn的方式去加载。然而由于网络等原因，加载cdn资源可能会出现比较慢甚至加载不了,这时就需要加载本地的资源啦。引出来的问题就是：到底啥时候用cdn，啥时候用本地？这个问题是好几个月前碰到的，当时学习了一些关于cdn fallback的资料，好像是通过设置timeout,

在设定的时间里给定的资源还访问不到就fallback，有兴趣的可以google下，这里就不贴exampole啦。但是看了这些感觉还是没能解决我的问题，看上去是那么回事，但是总感觉少了点什么。后来一想，是不是可以那想要请求的资源做个测试，测试的目的主要看哪个资源更快。比如cdnjs/bootcdn/本地同时请求jquery,谁先response用哪个！ 于是乎采用了这种解决方案。

（大家有更好的解决方案的话可以分享给我呀，谢啦~)

```javascript
// example
  const testList = [['url','cnd'],['url','local']]
  testList.forEach(function (item) {
  	 loadAssetsWithIframe(item[1], item[0]);
  
  });
  		
  var loadAssetsWithIframe = function (src, type) {
    // 用iframe test
     if (!testIframe) {
      testIframe = document.createElement('iframe');
      testIframe.width = testIframe.height = 0;
      testIframe.style.display = 'none';
      testIframe.src = '';
      testIframe.id = 'testPerformanceIframe';
      document.body.appendChild(testIframe);
     }
     var ele = document.createElement('script');
     ele.setAttribute('type', 'text/javascript');
     ele.setAttribute('src', src);
     ele.onload = function () {
     	if (!bestSrc) {
     		bestSrc = type;
     		var testFinished = new Date();
     		filesDict.loadedResult.push(testStart, testFinished, testFinished - testStart);
     	}
     };
     var iframeBody = testIframe.contentWindow.document.body;
     iframeBody.appendChild(ele);			
   }
```

这段代码会确定一个bestSrc，在外部可以setInterval去看是否已经确定了bestSrc，根据这个bestSrc来确定加载的路径。（不要忘记remove testIframe哦）。





