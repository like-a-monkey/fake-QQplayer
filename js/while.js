while(true) {
    var num = prompt("输入一个大于1的整数");
    if (!isNaN(num) && num >= 1) {
        break;
    }
}
var counter=0;
for(var i=2;i<num;i++){
    if( num%i == 0 ){
      counter++;
    }

    if (counter > 0){
        console.log("bushizhishu");
        break;
    }
}

if(counter == 0){
    console.log("shizhishu");
}