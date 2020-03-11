
function fun(a,b){
    console.log(this);
    console.log(this.name);
    console.log(a,b);
}
fun(1,2);
//当我们直接调用函数时默认的this指向window全局对象
//相当于函数fun是在window中定义的
var obj = {
    name:"好名字"
};
fun.call(obj,1,2);
fun.apply(obj,[1,2]);
//使用call或者apply函数可以改变this指向的对象，指向所传的对象
//call与apply唯一的不同就在于apply函数第一个参数传对象，而第二个是
//传 原参数所需参数的数组；而call是直接在后面传原函数所需的参数。