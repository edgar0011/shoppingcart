function* gen () {
  const a = yield 11;
    const b = yield 22;  
    const c = yield b;
}

const it = gen();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const p = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
  });
};

const d = async () => {
  const dd = await p();  
  console.log('dd:', dd);
  return 'This is dd, ' + dd;
};


const f = async () => {
  const d2 = await d();
  console.log('d2:', d2);
  return d2;
};
f();

p().then(re => {
  console.log('p:re:', re);
})




