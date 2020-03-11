// var obj1 = {
//     name:"hello",
//     obj2:{
//         name:"noGood!",
//         fun:function(){
//             console.log(this.name)
//         }
//     }
// }
// obj1.obj2.fun();





//var arr =new Array(10);此时定义是数组的长度
//var arr = [10];此时定义的是一个只有10这个数字的数组
//数组中的元素可以为任意类型 如对象函数 Number String等等
//
// var arr = new Array(10);
// var brr = [10];
// console.log(arr," ",brr);

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//
// }
// var per1 = new Person("faker",22);
// var per2 = new Person("ruler",22);
// var per3 = new Person("uzi",22);
// var per4 = new Person("ming",23);
// Person.prototype.toString=function(){
//     console.log("Person "+this.name+this.age);
// }
// //由此可以看出 webStorm控制台并非使用toString()来显示对象
// console.log(per1);