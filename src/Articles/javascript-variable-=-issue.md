### Can (a ==1 && a== 2 && a==3) ever evaluate to true

[stackoverflow](https://stackoverflow.com/questions/48270127/can-a-1-a-2-a-3-ever-evaluate-to-true)


#### implements

##### 1. object == num , will call object valueOf() or toString() method, valueOf first

```ecmascript 6
const a = {
  i: 1,
  toString() {
    return a.i++;
  },
  valueOf(){
      return a.i++;
  }
}

if(a == 1 && a == 2 && a == 3) {
  console.log('Hello World!');
}

```

##### 2. array == num , will call object valueOf() or toString() method, valueOf first
```ecmascript 6

let a = [1,2,3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3);
```

