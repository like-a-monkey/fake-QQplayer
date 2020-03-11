(function(window){
    function Progress($progressBg, $progressReal, $progressDot){
        return new Progress.prototype.init($progressBg, $progressReal, $progressDot);
    }
    Progress.prototype = {
        constructor:Progress,
        init:function($progressBg, $progressReal, $progressDot){
            this.$progressBg = $progressBg;
            this.$progressReal = $progressReal;
            this.$progressDot = $progressDot;
        },
        ismove:false,
        //判断是否处于移动状态
        progress_click:function(callback){
            var that = this;
            //保存this  下方的点击事件属于$progressBg 所以this也指向它
            this.$progressBg.click(function(event){
                var normalLeft = that.$progressBg.offset().left;
                var result = event.pageX - normalLeft;
                that.$progressReal.css('width',result);
                that.$progressDot.css('left',result);
                var percent = result/that.$progressBg.width();
                callback(percent);
            });
        },
        progress_drag:function(callback){
            var result;
            var normalLeft = this.$progressBg.offset().left;
            var that = this;
            var barLength = this.$progressBg.width();
            //保存this  下方的点击事件属于$progressBg 所以this也指向它
            this.$progressBg.mousedown(function(){
                that.ismove = true;
                //当处于拖拽状态时 将ismove赋成true
                $(document).mousemove(function(event){
                    result = event.pageX - normalLeft;
                    if(result<0){
                        result = 0;
                    }
                    else if (result>barLength){
                        result = barLength;
                    }
                    that.$progressReal.css('width',result);
                    that.$progressDot.css('left',result);
                });
                $(document).mouseup(function(){
                    $(document).off('mousemove');
                    //that.$progressBg.off()
                    that.ismove = false;
                    var percent = result/that.$progressBg.width();
                    //计算百分比
                    callback(percent);
                    //闭包取出数据
                    $(document).off('mouseup');
                    //取消mouseup防止发生复位bug
                })
            });
        },
        setProgress:function(percent){
            if(this.ismove) return;
            //如果点被拖拽 ismove为true 可以直接返回不再监控播放进度
            if(percent<0 || percent>100) return;
            this.$progressReal.css('width',percent+'%');
            this.$progressDot.css('left',percent+'%');
        }
    };
    Progress.prototype.init.prototype = Progress.prototype;
    window.Progress=Progress;
})(window);