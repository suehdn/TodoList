const o = {x : {y : 1}};


// //얕은 복사
// const c1 = {...o};
// console.log(c1 === o); //false
// console.log(c1.x === o.x); //true

// const c2 = o;
// console.log(c2 === o); //true
// console.log(c2.x === o.x); //true

// //깊은 복사
// // npm install lodash 설치하고 사용
// const _ = require('lodash');
// const c3 = _.cloneDeep(o); 
// console.log(c3 === o); //false
// console.log(c3.x === o.x); //false

const c1 = {...x};
c1.x = 2;
console.log(c1)
console.log(x)