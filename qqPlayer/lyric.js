(function(window){
    function Lyric(path){
        return new Lyric.prototype.init(path);
    }
    Lyric.prototype = {
        constructor:Lyric,
        init:function(path){
            this.path = path;
        },
        times:[],
        lyrics:[],
        lyricIndex:-1,
        loadLyric:function(callback){
            var $this = this;
            $.ajax({
                url:$this.path,
                dataType:'text',
                success:function(data){
                    $this.parseLyric(data);//解析完成调用callback
                    callback($this.lyrics,$this.times);
                },
                error:function(e){
                    console.log(e);
                }
            });

        },
        parseLyric:function(data){
            var $this = this;
            //清空上一首的数据
            this.lyrics = [];
            this.times = [];
            var lyReg = /\[(\d*:\d+\.\d+)\]/;
            var newdata = data.split('\n');
            $.each(newdata,function(index,ele){
                var songLyric = ele.split(']')[1];
                if(songLyric == 0) return;
                //若为空字符串 则return 但会继续遍历相当于continue
                $this.lyrics.push(songLyric);
                var res = lyReg.exec(ele);
                if (res == null) return;
                var time = res[1].split(':');
                var min = parseInt(time[0]);
                var sec = parseFloat(time[1]);
                var times = min*60+sec;
                times = parseFloat(times.toFixed(2));
                $this.times.push(times);
            });
        },
        matchLyric:function(currentTime){
            if(currentTime>this.times[0]){
                this.times.shift();//去掉第一个时间
                this.lyricIndex++;
            }
            return this.lyricIndex;//此时对应着歌词的正在播放的那一句的索引
        }
    };
    Lyric.prototype.init.prototype = Lyric.prototype;
    window.Lyric = Lyric;
})(window);