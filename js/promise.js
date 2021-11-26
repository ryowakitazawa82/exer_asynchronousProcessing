'use strict';

function test1() {

    return '関数1'
 }
//  console.log(test1());

 //変数・定数
//  const test2 = function(){
//      return '関数2';
//  }

 const test2 = () => {
     return '関数2';
 }

//  console.log(test2());

 // Promise
 //　1.状態(ok/ng)と値
 // 2.promiseチェーン

 // callbacks
 // 引数が状態　ok,ng（1つでも可）


 function promiseTest1() {
     return new Promise(ok => {
        //  ここに何かしらの処理
        ok('プロミス1です');
     });
 }

//  console.log(promiseTest1());

 const promiseTest2 = new Promise( ok => {
     ok('プロミス2です');
 });

//  console.log(promiseTest2);

 function testPromise3(input) {
     return new Promise((resolve) => {
         //何かしら処理
         resolve(`プロミス${input}です`);
     });
 }

//  console.log(testPromise3('太郎'));

 // Promiseチェーン
 // Promise .then(ok_callback, ng_callback)
 // Promise .then((ok_value) => {},(ng_reason) => {})　
 // Promise .catch((ng_reason) => {}) //NGはcatchで書くことがおおい！！

//  function promiseTest4(pay){
//      return new Promise(ok => {
//          let change = pay - 100;
//          ok(change);
//         });
//     }

//     console.log(promiseTest4(300));

//     promiseTest4(300).then(change1 => {
//         console.log(change1);
//         return promiseTest4(change1)//Promiseでラップ
//     }).then(change2 => {
//         console.log(change2);
//     });


    //ngも追加

    function promiseTest4(pay){
        return new Promise((ok, ng) => {
            if(pay > 100){
                let change = pay - 100;
                ok(change);
            }
            ng('お金が足りません')
           });
       }

       console.log(promiseTest4(80).catch( e => {
           console.log(e)
       }));

       promiseTest4(180).then(change1 => {
           console.log(change1);
           return promiseTest4(change1)//Promiseでラップ
       }).then(change2 => {
           console.log(change2);
       }).catch( e => console.log(e));
