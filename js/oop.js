function Father(a,b){
    this.a = a;
    this.b = b;
    //父构造函数的属性
}
Father.prototype.makemoney = function(){
    console.log("1000dollars");
};//父构造函数的方法


function Son(a,b){
    Father.call(this,a,b);
    //利用call来讲父类中的this指向子类的对象达到继承属性的目的
}
var son = new Son(1,2);
console.log(son.a);
console.log(son.b);
var father = new Father();
Son.prototype =father;//让Son的原始对象指向Father的实例对象
var son1 = new Son();
 //console.log(son.__proto__);
console.log(son1.__proto__.constructor);//两个实例对象指向原始对象不同
//其实就是当我们给prototype整体来赋值时 相当于更改了他的内存地址
//但是如果是简单的修改增添属性并不影响他的内存地址
//但是原来的那一块地址上的内容还会被保留 猜测应该是还存在响应的对象没有删除对应的内存
// console.log(father.__proto__);
son1.makemoney();
//此时就可以通过子类对象来调用父类方法 达到继承的目的


//但是我们在给Son.prototype赋值的时候 constructor属性就不见了
//于是我们查看子类原始对象的constructor属性时 根据原型链 就会继续往上寻找
console.log(son1.__proto__.constructor);
console.log(son1.__proto__.constructor === Father.prototype.constructor);
//就会找到Father实例对象father的__proto__属性中的constructor 也就是
//Father.prototype.constructor此时constructor指向的是Father构造函数
son1.__proto__.constructor = Son;
console.log(son1.__proto__.constructor);
//所以我们需要在下面给Son.prototype添加constructor属性来正确指向Son构造函数
