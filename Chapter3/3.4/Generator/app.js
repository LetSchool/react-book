function *gen() {
    console.log('before yield');
    var total = 1 + (yield 'foo');
    console.log('after yield, ' + total);  // 10
}

var a= gen();
console.log(a.next());
console.log(a.next(9));
