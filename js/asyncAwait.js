'use strict';

// 非同期　関数
// 戻り値がPromiseになる
// return ・・ok
// throw ・・ng
async function aTest1() {
    return'非同期関数1';
}

console.log(aTest1().then(value => console.log(value)));

// await ・・asyncの中でのみ使える
function waiting (seconds) {
    return new Promise(ok => {
        setTimeout(() => {
            ok()
        }, 1000 * seconds)
    })
};

async function aTest2() {
    console.log(1);
    await waiting(2);
    console.log(3);
}

aTest2();
