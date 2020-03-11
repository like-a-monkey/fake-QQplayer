// var arr = ['shaojie','linxuan0','839361@qq.com','@dsdasd.cxjckx'];
// var exp = /.*@qq.com/i
// var flag=arr.some(function(value){
//     return exp.test(value);
// });
// console.log(flag);

// var obj = {
//     name:"hhsdahh",
//     age:15,
//     gener:"female"
// };
// console.log(Object.keys(obj));
//枚举


// function Father(name){
//     this.name = name;
// }
// Father.prototype.name = 'kfc';
// Father.prototype.fun = function(){
//     console.log(this.name);
// };
// var father = new Father('m');
// father.fun();
// father.__proto__.fun();
//具体事情具体分析  哪个对象调用的 this就指向谁
//prototype中的函数this也可以指向自己的



// function fun(){
//     console.log(this.name);
// }
// var obj = {
//     name:'obj'
// };
//
// var f = fun.bind(obj);
// f();
//有的函数我们不需要立即调用 又想改变this指向最适合bind
// var obj = {0:'123',1:56454,length:2};
// var arr =  [].slice.call(obj);
// console.log(arr);
// function dataFormat(data){
//     var res=[];
//     for(var k in data){
//         res.push(k+"="+data[k]);
//     }
//     return res.join('&');
// }
// var obj = {
//     data1:78,
//     json:'nogood',
//     house:'housenihao'
// };
// console.log(dataFormat(obj));

// function addCookie(key,value,day,path,domain){
//     var index = window.location.pathname.lastIndexOf('/');
//     var currentPath = window.location.pathname.slice(0,index);
//     //当前路径
//     path = path || currentPath;//默认路径
//     domain = domain || document.domain;//默认域名
//     if(!day){
//         document.cookie = key+"="+value+";path="+path+";domain="+domain;
//         //默认声明周期为一次对话
//     }
//     else{
//         var date = new Date();
//         date.setDate(date.getDate()+day);
//         document.cookie = key+"="+value+"expires="+date.toGMTString()+";path="+path+";domain="+domain;
//     }
// }
// var arr = [1,2,3,4];
// arr.forEach((value,index) =>{
//     if(index === 2){
//         return true;
//     }
//     console.log(value);
// });
console.log(1==true);
