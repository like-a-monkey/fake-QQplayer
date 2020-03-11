(function(window){
    function Player($audio){
        return new Player.prototype.init($audio);
    }
    Player.prototype = {
        constructor:Player,
        musicList:[],
        init:function($audio){
            this.$audio = $audio;
            this.audio = $audio.get(0);
        },
        currentIndex:-1,
        playMusic:function(music,index){
            //判断是否同一首歌
            if(this.currentIndex === index){
                if(this.audio.paused){
                    this.audio.play();
                    //判断当前状态是否为暂停 暂停则继续播放
                }
                else{
                    this.audio.pause();
                }
            }
            else{
                //如果不是同一首歌则需要切换audio的src
                this.$audio.attr('src',music.link_url);
                this.audio.play();
                //播放歌曲
                this.currentIndex = index;
                //更换index
            }
        },
        preIndex:function(){
            var index = this.currentIndex;
            index--;
            if(index === -1){
                index = this.musicList.length - 1;
            }
            return index;
        },//从第一首跳至最后一首
        nextIndex:function(){
            var index = this.currentIndex;
            index++;
            index%=this.musicList.length;
            return index;
        },//从最后一首跳至第一首
        changeMusic:function(index){
            this.musicList.splice(index,1);
            if(index < this.currentIndex){
                this.currentIndex = this.currentIndex-1;
            }
        },
        changeBar:function(callback){
            var that = this;
            this.$audio.on('timeupdate',function(){
                var timeProgress = timeFormat(that.audio.currentTime,that.audio.duration);
                callback(timeProgress,that.audio.currentTime,that.audio.duration);
                //闭包取出函数数据
            });
            function timeFormat(current,duration){
                var endMin = parseInt(duration/60);
                var endSec = parseInt(duration%60);
                var startMin = parseInt(current/60);
                var startSec = parseInt(current%60);
                function add0(time){
                    if (time<10){
                        return '0'+time;
                    }
                    return time;
                }
                endMin = add0(endMin);
                endSec = add0(endSec);
                startMin = add0(startMin);
                startSec = add0(startSec);
                return startMin+':'+startSec+' / '+endMin+':'+endSec;
            }
        },
        musicSeekTo:function(percent){
            //初始percent为nan  需要先过滤一下
            if(percent>0 && percent<1){
                this.audio.currentTime = this.audio.duration*percent;
                //根据百分比让音乐播放进度跳至我们制定位置
            }
        },
        setMusicVoice:function(percent){
            if(percent<0 || percent>1) return;
            //过滤大小不符合规范的值
            this.audio.volume = percent;
        }


    };
    Player.prototype.init.prototype = Player.prototype;
    window.Player = Player;
})(window);