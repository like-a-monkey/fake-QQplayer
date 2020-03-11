// for(var i=1;i<10;i++){
//
//     for(var j=1;j<=i;j++){
//        document.write(j+"*"+i+"="+i*j+"  ");
//     }
//     document.write("<br/>");
// }

// var a = 123;
// function fun(a){
//     console.log(a);
//     a = 456 ;
// }
// alert(123);
// fun(a);
// var d = 777;
// class father {
//     constructor(x,y){
//         this.x=x;
//         this.y=y;
//     }
//     add(){
//         return this.x+this.y;
//     }
//
// }
// class son extends father{
//     constructor(x,y){
//         super(x,y)
//         this.x=7;
//         this.y=5;
//
//     }
//     substract(){
//         return this.x-this.y;
//     }
// }
// var a = new son();
// console.log(a.add());
// console.log(a.substract());
var that;
class star{
    constructor(name){
        this.name = name;
        that = this;
    }
}

var j = new star('j');
var l = new star('l');
    console.log(j);
