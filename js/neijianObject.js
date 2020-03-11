// var d = new Date();
// console.log(d);
// //封装一个时间 执行的时候的时间；
//
// // var d = new Date("10/8/2019 11:20:59");
// // console.log(d);
// //创建一个指定的时间 参数格式重要否则有歧义
//
// var data=d.getDate();//号数
// var day=d.getDay();//星期 0~6 表示 星期天~星期六 0为周日
// var month=d.getMonth();//月份 0~11 表示一到十二月
// var year=d.getFullYear();
// var time=d.getTime();
// console.log(data,day,month,year);
// console.log(time);//时间戳 ———— 格林威治标准时间1970/1/1到d对象里存的时间相隔的毫秒数
// //时间单位太杂乱 所以存储困难 转为一个统一的时间戳让计算机方便保存
// var d1=new Date("1/1/1970 0:0:0");
// var time1=d1.getTime();
// console.log(time1);
//时间戳不为零的原因是时区问题 我们和标准时区差了八个小时
//而我们新创建的时间是以我们所在的时区创建的

// time2 = Date.now();
// 获取当前时间的时间戳 用来测试程序性能


