function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];}
    else{
        return obj.currentStyle[name];}
}
//取出相关样式 兼容ie


function move(obj,speed,target,eventstr,callback){
    var current = getStyle(obj,eventstr);//获取一开始传入位置 判断速度方向
    current = parseInt(current);
    if(current>target){
        speed = -speed;
    }
    clearInterval(obj.timer);
    obj.timer=setInterval(fun,30);
    //使用对象属性来储存定时器编号 ,方便同时设置多个定时器
    function fun(){
        var oldvalue = getStyle(obj,eventstr);
        oldvalue = parseInt(oldvalue);//去px 方便速度计算

        obj.style[eventstr] =oldvalue+speed+"px";
        var newvalue = oldvalue + speed;
        console.log("still working");
        //设置超过target时自动停下
        if(speed>0){
            if(newvalue>=target){
                obj.style[eventstr] = target + "px";
            }
        }
        else{
            if(newvalue<=target){
                obj.style[eventstr] = target + "px";
            }
        }

        if((obj.style[eventstr]) === (target + "px")){
            clearInterval(obj.timer);
            callback && callback();
        }
    }
}
// 自动生成动画效果包括 左右上下移动 高度宽度自动变换
//obj  要设置动画效果的对象
//speed 动画生成的速度
//target 动画移动到的最终位置 absolute
//eventstr 动画类型
//callback 执行完毕后的回调函数

function ajax(obj){
    //创建一个异步对象
    var xhr;
    var str="";
    //创建空串代表参数data
    var timer;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xhr=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(obj.data){
        str = dataFormat(obj.data);
    }
    if(obj.type.toUpperCase() === 'GET'){
        //GET请求
        //设置请求的方式和地址,设置是否为异步方式 选true
        var finalstr = obj.url+"?t="+(new Date().getTime())+'&'+str;
        xhr.open('GET',finalstr,true);
        //每次发送是确保url不一样 防止ie因为url相同不再从新文件中读取数据
        //这样每次请求都能拿到服务器最新的数据
        //发送请求
        xhr.send();
        //监听异步对象状态变化
    }
    else if(obj.type.toUpperCase() === 'POST'){
        //POST请求
        //设置请求的方式和地址,设置是否为异步方式 选true
        var finalstr ="t="+(new Date().getTime())+'&'+str;
        xhr.open('POST',obj.url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send('finalstr');
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            clearTimeout(timer);
            if(xhr.status >=200 && xhr.status<300 || xhr.status === 304)
            {
                //处理返回结果
                obj.success && obj.success(xhr);
            }
            else{
                //处理返回结果
                obj.error && obj.error(xhr);
            }
        }
    };
    if(obj.timeout){
        timer = setTimeout(function(){
            xhr.abort();
            console.log('请求中断');
        },obj.timeout);
    }
    function dataFormat(data){
        var res=[];
        for(var k in data){
            res.push(encodeURIComponent(k)+"="+encodeURIComponent(data[k]));
            //确保提交的参数没有中文 兼容ie防止出错
            // ie url中如果出现中文就会乱码
        }
        return res.join('&');
    }

}
