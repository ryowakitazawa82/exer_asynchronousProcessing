'use strict';

// サーバーとのやりとりなど時間がかかる処理　かかる時間不明
console.log(1);
promiseTest(300, 2)
.then(change1 => promiseTest(change1,3))
.then(change2 => promiseTest(change2,2))
.catch(e => console.log(e));
console.log(3)

function promiseTest(pay, seconds){
    return new Promise((ok, ng) => {
        setTimeout(() =>{
            if(pay > 100){
                let change = pay - 100;
                console.log(`${seconds}秒、お釣りは${change}です`);
                ok(change);
            }
            ng('お金が足りません')
        },  seconds * 1000)
       });
   }

