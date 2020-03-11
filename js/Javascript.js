//
// var score=prompt("输入小明的成绩");
// score=Number(score);
// if(score==100){
//     alert("bmw");
// }
// else if(score>=80&&score<=99){
//     alert("iphone");
// }
// else if(score>=60&&score<80){
//     alert("book");
// }
// else{
//     alert("nothing");
// }



//var height = prompt("shengao");
// var money = prompt("caifu");
// var hansome = prompt("yanzhi");
//
// if(height>180&&money>1000&&hansome>500){
//     alert("kendingjia");
// }
// else if(height<=180&&money<=1000&&hansome<=500){
//     alert("kendingbujia");
// }
// else{
//     alert("mianqiangjiaba ");
// }


//
// var num1 = prompt("num1");
// var num2 = prompt("num2");
// var num3 = prompt("num3");
//
// if(num1>num2){
//     if(num1>num3){
//         alert("num1 max")
//     }
//     else{
//         alert("num3 max")
//     }
// }
// else if(num1<num2){
//     if(num2>num3){
//         alert("num2 max")
//     }
//     else{
//         alert("num3 max")
//     }
// }
// else{
//     alert("plz don't input the same number!")
// }
//


// var a = +prompt("1~7")
// switch(a){
//     case 1:
//         console.log("星期一");
//         break;
//
//     case 2:
//         console.log("星期二");
//         break;
//
//     case 3:
//         console.log("星期三");
//         break;
//
//     case 4:
//         console.log("星期四");
//         break;
//
//     case 5:
//         console.log("星期五");
//         break;
//
//     case 6:
//         console.log("星期六");
//         break;
//
//     case 7:
//         console.log("星期日");
//         break;
//     default:
//         console.log("feifashuzi ");
// }

//
// function Star(name){
//     this.name = name;
//
// }
// var yi = new Star("yi");
// Star.prototype.name="jia";
// Star.prototype.fun = function(){
//     console.log(this.name);
//     //谁调用就指向谁 this
// };
// console.log(yi.__proto__.constructor === Star)