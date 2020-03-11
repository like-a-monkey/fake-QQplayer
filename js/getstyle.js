function getStyle(obj,name){
    if(window.getComputedStyle){
    return getComputedStyle(obj,null)[name];}
    else{
    return obj.currentStyle[name];}
}