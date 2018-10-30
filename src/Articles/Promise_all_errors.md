[//]: <> ({createTime:'2018-01-19T03:11:34.791Z'})

### Promise All Catch All error

#### 1.  Promise.all 在有一个promise reject的时候就会掉入catch方法，此时catch的error只是reject的promise的error
  
#### 2. 实现了一个catch所有error的方法，原理就是原来的promise array会返回一个新的resolving中的promise array
  
#### 3. 新的promise array每一项都会resolve，然后用Promise.all去处理这个新的promise array


#### 4. 实现如下


```ecmascript 6
function wrapperPromiseAll(promises){
  let resolvingPromises = promises.map(promise=>{
    return new Promise(resolve => {
      let payLoad = {};
      promise.then(result=>{
        payLoad.success = result;
      }).catch(err=>{
        payLoad.error  = err;
      }).then(()=>{
        resolve(payLoad);
      })
    })
  });
  return Promise.all(resolvingPromises)
    .then(results=>{
      let errors = [],result = [];
      results.forEach(payLoad=>{
        if(payLoad.success){
          result.push(payLoad.success)
        }else {
          errors.push(payLoad.error)
        }
      });
      return new Promise((resolve,reject) =>{
        ~errors.length < -1 ? reject(errors) : resolve(result);
      } )
    })
}
```

#### 5. 测试如下


```ecmascript 6
let promise1 = new Promise(((resolve, reject) => {
    setTimeout(reject,100,'a')
}))

let promise2 = new Promise(((resolve, reject) => {
    setTimeout(reject,100,'b')
}))

// 直接应用Promise.all
Promise.all([promise1,promise2]).then(console).catch(console)

// Promise {<rejected>: "a"}


//使用wrapper
wrapperPromiseAll([promise1,promise2])

//Promise {<rejected>: Array(2)}
```