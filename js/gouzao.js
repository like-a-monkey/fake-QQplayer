function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.fun = function(){
    console.log("i am prototype!");
}

function fun(){
    console.log("i am global function!");
}
//当我们使用一个方法或者属性时。会现在自身中寻找；
//如果没有就去原型对象中寻找。如果原型对象中也没有
//则去原型的原型中寻找 直到找到Object的原型 如果此时也没有找到就返回undefined
// （这里只嵌套了两层也就是应该默认Object是最原始的类了，但是Person类还可
// 以继续继承）
var per = new Person("shaojie","16");
var obj = new Object();
console.log(per.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));
console.log(per.__proto__.__proto__ == obj.__proto__)

var result=per.toString();
console.log(per);
console.log(result);