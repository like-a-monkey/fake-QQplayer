// var obj = new Object();
// obj.fun = fun;
// function fun(){
//     console.log("nothing");
// }
// obj.fun();



// var c = 10;
// function fun(){
//     console.log(c);
//     c = 15;//此处相当于将上面的全局变量c给覆盖为15了因为没加var
// }
// fun();
// console.log(c);





//这是声明提前了 提前到了函数作用于的最前端，所以根据就近原则找的a并不是外部的a
//此时就会产生undefined
// var a = 10;
// function fun(){
//     console.log(a);
//
//     var a=3;
//
// }
// fun();