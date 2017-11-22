#parse excel in client side

最近有个需求：页面上的表单数据太多，一个一个填充比较麻烦，希望能通过上传excel的方式实现表单填充。由于项目比较老旧，用的JSF,在以前类似的需求中，一般都是写个JSF页面和后端java绑定，在java里解析excel。由于最近一段时间都是用的javascript,就想着能不能在client端完成这件时间，对我来说就不用去看老的技术老的代码啦，岂不是很爽！


js解析excel的包那是非常多呀，随便一找就找到了（我用的js-xlsx),于是乎兴冲冲的刷刷刷写了个demo。chrome下非常顺利，心中暗自窃喜：没想到这么简单。没想到在IE9上出错了！经检查是IE9不支持文件API。查了半天也没发现IE9 file api polyfill。没事！IE上不是有专有的activeXObject么，但是很不幸，BA说不能用介个。又查了半天，还是没结果。没办法呀，只能看看以前写的实现咯.咦，这里不也是用到了activeXObject么，马上就把这一发现告诉BA，然后~~就用啦！


综上，整个解析的过程就是在upload的过程中，先检查支不支持文件api，支持就皆大欢喜用自己想要的插件啦，不支持那就检查是否是IE，是就用activeXObject啦。如果你想问这个被disable了怎么办，那我只能回答你`GG`!




### html
````html
 <input type="file"  onchange="parseExcel(event,this)"/>
````

### javascript
````javascript
function parseExcel(event,ele){
    if(supportFileAPI){
        // parse use js-xlsx
        var reader = new FileReader();
        reader.readAsArrayBuffer(event.files)
    }else{
        //parse use activeXObject
        var excel = new ActiveXObject("Excel.Application");
        var book = excel.Workbooks.Open(ele);
        ....
    }
}

function supportFileAPI(event){
    return evt && evt.target && evt.target.files;
}


````


