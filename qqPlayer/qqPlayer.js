$(function(){
     //自定义滚动条
    $('.singList').mCustomScrollbar();
    var $ul = $('.singList ul');
    var $audio = $('audio');
    var player =new Player($audio);
    var current_voice;
    var lyric;
    $progressBg = $('.barBgc');
    $progressReal = $('.barRel');
    $progressDot = $('.dot');
    var progress =Progress($progressBg, $progressReal, $progressDot);
    //创建一个Progress对象 来操作音乐进度条
    progress.progress_click(function(percent){
        player.musicSeekTo(percent);
        //根据百分比调整音乐进度
    });
    progress.progress_drag(function(percent){
        player.musicSeekTo(percent);
        //根据百分比调整音乐进度
    });

    $voiceBg = $('.voiceBarBg');
    $voiceReal = $('.voiceBar');
    $voiceDot = $('.voice_dot');
    var voice_progress =Progress($voiceBg, $voiceReal, $voiceDot);
    //创建一个Progress对象 来操作音量调条
    voice_progress.progress_click(function(percent){
        current_voice = percent;//存储当前音量
        player.setMusicVoice(percent);
        //根据百分比调整音乐声音大小
    });
    voice_progress.progress_drag(function(percent){
        current_voice = percent;//存储当前音量
        player.setMusicVoice(percent);
        //根据百分比调整音乐声音大小
    });

    getPlayerList();
    //加载歌曲列表
    function getPlayerList(){
        $.ajax({
            url:"1/source/musiclist.json",
            dataType:'json',
            success:function(data){
                player.musicList =  data;
                $.each(data,function(index,ele){
                    var $item = creatMusicItem(index,ele);
                    $ul.append($item);
                });
                initMusicInfo(data[0]);
                initMusicLyric(data[0]);
            },
            error:function(e){
                console.log(e);
            }
        });
    }
    function creatMusicItem(index,music){
        var $item = $("<li>\n" +
            "                        <div class=\"list_check\"><span></span></div>\n" +
            "                        <div class=\"list_number \">"+(index+1)+"</div>\n" +
            "                        <div class=\"list_name\">"+music.name+"\n" +
            "                        <div class=\"menu\">\n" +
            "                            <a href=\"javascript:;\" class=\"play_stop\"></a>\n" +
            "                            <a href=\"javascript:;\"></a>\n" +
            "                            <a href=\"javascript:;\"></a>\n" +
            "                            <a href=\"javascript:;\"></a>\n" +
            "                        </div></div>\n" +
            "                        <div class=\"list_singer\">"+music.singer+"</div>\n" +
            "                        <div class=\"list_time\">\n" +
            "                            <span>"+music.time+"</span>\n" +
            "                            <a href=\"javascript:;\" class=\"singList_delete\"></a>\n" +
            "                        </div>\n" +
            "\n" +
            "                    </li>")
        $item.get(0).index = index;
        $item.get(0).music = music;
        return $item;
    }
    function initEvents(){
        $ul.delegate("li","mouseenter",function(){
            //delegate中第一个参数选择器 默认从前面的元素节点中的后代中选择 需要注意,不然可能找不到元素
            //设置菜单显示
            $(this).find('.menu').show();
            //设置隐藏时长
            $(this).find('.list_time span').hide();
            //设置垃圾桶出现
            $(this).find('.list_time a').show();
        });
        $ul.delegate("li",'mouseleave',function(){
            $(this).find('.menu').hide();
            $(this).find('.list_time span').show();
            $(this).find('.list_time a').hide();
        });
        $ul.delegate("span",'click',function(){
            $(this).toggleClass('choose');

        });
        $ul.delegate('li .play_stop','click',function(){
            $(this).parents('li').siblings('li').find('.play_stop').removeClass('play');
            //设置其他兄弟li中的play
            $(this).toggleClass('play');
            //转换自己的play
            player.playMusic($(this).parents('li')[0].music,$(this).parents('li')[0].index);
            //点击播放音乐 仅限歌单[0] get(0)效果一致 单纯简写 将jq对象转为原生js对象
            initMusicInfo($(this).parents('li')[0].music);
            //切换文字背景信息 切歌时便切换
            initMusicLyric($(this).parents('li')[0].music);
            if($(this).hasClass('play')){
                $('.footer_in .music_play').addClass('music_stop');
                $(this).parents('li').siblings('li').css('color','rgba(255,255,255,0.5)');
                //设置未选中的曲目文字不高亮
                $(this).parents('li').css('color','rgba(255,255,255,1)');
                //设置选中的曲目文字高亮
                $(this).parents('li').siblings('li').find('.list_number').removeClass('list_number_on');
                //设置其他未选中的li wave move 排他
                $(this).parents('li').find('.list_number').addClass('list_number_on');
                //设置选中li wave
            }
            else{
                //设置原目标 切换为暂停状态
                $('.footer_in .music_play').removeClass('music_stop');
                $(this).parents('li').css('color','rgba(255,255,255,0.5)');
                $(this).parents('li').find('.list_number').removeClass('list_number_on');
            }
        });


        $('.footer_in .music_play').click(function(){
            var $li = $('.singList li');
            //底部  图标切换暂停 / 播放图标切换  带stop时候为播放状态 表示可以stop
            $(this).toggleClass('music_stop');
            //首先判断是否此前已被选中 如果未选中过默认播放第一曲
            if(player.currentIndex === -1){
                $li.eq(1).find('.play_stop').trigger('click');
            }
            //如果已被选中则player.currentIndex+1即为选中曲目
            else{
                $li.eq(player.currentIndex+1).find('.play_stop').trigger('click');
            }
        });
        $('.footer_in .music_pre').click(function(){
            var $li = $('.singList li');
            //判断是否有已选中的歌曲
            if(player.currentIndex !== -1){
                $li.eq(player.preIndex()+1).find('.play_stop').trigger('click')
            }
        });
        $('.footer_in .music_next').click(function(){
            var $li = $('.singList li');
            if(player.currentIndex !== -1){
                $li.eq(player.nextIndex()+1).find('.play_stop').trigger('click')
            }
        });
        //委托事件 删除按钮
        $ul.delegate('.singList_delete','click',function(){
            var $li = $(this).parents('li');
            if($li[0].index === player.currentIndex){
                //判断删除歌曲是否为当前歌曲 是则自动播放下一曲
                $('.footer_in .music_next').trigger('click');
                player.currentIndex --;
                //修正currentIndex
            }
            $li.remove();
            player.changeMusic($li[0].index);
            $.each(player.musicList,function(index,ele){
                //分别改变.list_number里的数字 以及li对象中存储的index music
                var $ll = $('.singList li');
                $ll.eq(index+1).find('.list_number').text(index+1);
                $ll.get(index+1).index = index;
                $ll.get(index+1).music = ele;
            });
        });
        //监听删除按钮
        $('.playerVoice a').click(function(){
           $(this).toggleClass('mute');
           if($(this).attr('class').indexOf('mute') === -1){
              //此时不为静音
                player.setMusicVoice(current_voice);
           }
           else{
               //此时为静音
               player.setMusicVoice(0);

           }
        });
        var $timeP = $('.songMessage span:last-child');
        player.changeBar(function(timeStr,current,duration){
            //同步播放时间
            $timeP.text(timeStr);
            //同步进度条
            var cIndex = lyric.matchLyric(current);
            lyric_syn(current);
            var percent = current/duration*100;
            progress.setProgress(percent);
        });
    }
    //初始化时间监听
    initEvents();
    //初始化歌曲信息
    function initMusicInfo(music){
        var $albumImg = $('.albumImg img');
        var $songName = $('.song_name a');
        var $singerName = $('.singer_name a');
        var $albumName = $('.album_name a');
        var $songMessage = $('.songMessage span:first-child');
        var $songTime = $('.songMessage span:last-child');
        var $songBg = $('.mask_bg');
        $albumImg.attr('src',music.cover);
        $songName.text(music.name);
        $singerName.text(music.singer);
        $albumName.text(music.album);
        $songMessage.text(music.name+" / "+music.singer);
        $songTime.text('00:00/'+music.time);
        $songBg.css({'background':'url('+music.cover+') no-repeat 0 0',
            backgroundSize:"cover"})
    }
    //封装歌词同步
    function lyric_syn(current){
        var cIndex = lyric.matchLyric(current);
        var $lyric_li = $('.song_lyric li');
        $lyric_li.eq(cIndex).addClass('lyric_on');
        $lyric_li.eq(cIndex).siblings().removeClass('lyric_on');
        //设置播放歌词变色
        if(cIndex >= 2){
            $lyric_li.parents('ul').css({
            top:-40*(cIndex-2)
        });}

    }
    //初始化歌词信息
    function initMusicLyric(music){
        var $songUl = $('.song_lyric');
        //清空上一首个的html歌词
        $songUl.html('');
        lyric = Lyric(music.link_lrc);
        lyric.loadLyric(function(lyrics,times){
            $.each(lyrics,function(index,ele){
                var $item = $('<li>'+ele+'</li>');
                $songUl.append($item);
            })
        });
    }
});