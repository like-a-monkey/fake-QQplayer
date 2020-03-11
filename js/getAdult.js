// function Person(name,age){
//     this.name=name;
//     this.age=age;
//
// }
// var per1 = new Person("a",16);
// var per2 = new Person("b",26);
// var per3 = new Person("c",36);
// var per4 = new Person("d",6);
// var per5 = new Person("f",18);
// var arr1 = [per1,per2,per3,per4,per5];
// var farr = [];
// function getadult(arr){
//     var farr = [];
//     for(var i=0;i<arr.length;i++){
//        if(arr[i].age>=18){
//            farr.push(arr[i]);
//        }
//     }
//     return farr;
// }
// farr = getadult(arr1);
// console.log(farr);



// var arr = [1,2,3];
// arr.splice(1,0,8,8);
// console.log(arr);


arr=[1,4,5,6,7,8,9,2,3,4,5,6,4,8,2,1,3];
arr.sort(fun);
//sort函数比较特殊 采用Unicode编码来排序11比1还小，所以排数字的时候
//经常会出错，我们可以在后面传入一个回调函数
//函数中可以带两个参数 每次只排两个 若return真值表示换位置；若return的是负值则保持不变
//return表示两个值相等也不换位置 C n 2 排列组合来排列所有元素并将结果输出
//注意此时会改变原数组arr的值
//更加简便的方法时直接将函数内部定义为 return a-b；此时按升序排列
//return b-a则按降序排列
console.log(arr);
function fun(a,b){
    // if(a>b){
    //     return 1;
    // }
    // else if(a<b){
    //     return -1;
    // }
    // else{
    //     return 0;
    // }
return b-a;
}