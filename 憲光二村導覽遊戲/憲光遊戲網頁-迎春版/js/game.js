function check_select(n)
    {
        switch(n)
        {
            case 00:
                document.getElementById("indextitle").style.display = "block";
                document.getElementById("s2box").innerHTML="<div class=\"kccenter\" id=\"kctitle\">【背景】</div><p>鑰匙兒童，是部分眷二代的回憶中出現過的兒時記憶。擔任軍職的爸爸常因單位調派而不在家，媽媽為了補貼家計外出工作，部分的眷村的孩子在還沒出現”鑰匙兒童”這名詞之前，早已習慣帶著鑰匙上下學，但不同於都市鑰匙兒童的背景，在村子裡回到家的孩子可以到隔壁媽媽家吃飯、或是寫完功課與同伴在村子裡探險，因此，眷村就像個大家庭，彼此在需要之時互相照應。</p><br><button id=\"next_btn\" onclick=\"check_select(01)\">下一頁</button><div style=\"clear: both;\"></div>";
              break;
            case 01:
                document.getElementById("indextitle").style.display = "none";
                document.getElementById("s2box").innerHTML="<div class=\"kccenter\" id=\"kctitle\">【故事大綱】</div><p>小憲是在憲光二村出生的第三代，常聽爸爸說起爺爺的故事，爺爺是從遙遠的大陸北方來到台灣的，在台灣與奶奶相識結婚，後來在民國57年的時後搬進了村子，開始了眷村生活。小憲最喜歡在村子裡，跑到朋友家串門子，中央廣場、籃球場、小巷弄和村子的大樹，常常是他與朋友遊戲的基地。我們將時間拉回到20年前，現在就讓我們跟著小憲的腳步，一起挖掘憲光二村的生活點滴吧！</p><br><button id=\"next_btn\" onclick=\"check_select(02)\">下一頁</button><button id=\"next_btn\" onclick=\"check_select(00)\">上一頁</button><div style=\"clear: both;\"></div>";
              break;
            case 02:
                document.getElementById("indextitle").style.display = "none";
                document.getElementById("s2box").innerHTML="<div class=\"kccenter\" id=\"kctitle\">【目前的所在位置】</div><p>請先從憲光二村平面地圖了解自己目前的所在位置，之後依每關提示地圖至現場進行闖關。<br><br><img src=\"./images/map/map00.png\" alt=\"目前的所在位置地圖\"></p><br><button id=\"next_btn\" onclick=\"check_select(03)\">下一頁</button><button id=\"next_btn\" onclick=\"check_select(01)\">上一頁</button><div    style=\"clear: both;\"></div>";
              break;
            case 03:
                document.getElementById("indextitle").style.display = "none";
                document.getElementById("s2box").innerHTML="<div class=\"kccenter\" id=\"kctitle\">【故事】</div><p>放學後小憲回家便迫不及待丟下書包、衝出門，跑出去找他最好的朋友-小光。小光住在村子裡的眷舍公寓，和小憲家的矮房舍不太一樣。聽小光的外公說，他們是在民國63年的時後搬來的，雖然村子裡大家搬進來的時間都不太一樣，可是不管大人或是小孩感情都很要好。<br></p><br><button id=\"next_btn\" onclick=\"check_select(04)\">下一頁</button><button id=\"next_btn\" onclick=\"check_select(02)\">上一頁</button><div    style=\"clear: both;\"></div>";
            break;
            case 04:
                document.getElementById("indextitle").style.display = "none";
                document.getElementById("s2box").innerHTML="<div class=\"kccenter\" id=\"kctitle\">【目前的所在位置】</div><p>請依圖示移動至白千層區，進行第一項任務。<br><br><img src=\"./images/map/map01.png\" alt=\"第一關地圖(白千層區)\"></p><br><button id=\"next_btn\" onclick=\"check_select(05)\">下一頁</button><button id=\"next_btn\" onclick=\"check_select(03)\">上一頁</button><div    style=\"clear: both;\"></div>";
              break;
            case 05:
                document.getElementById("indextitle").style.display = "none";
                document.getElementById("s2box").innerHTML="<div class=\"kccenter\" id=\"kctitle\"><p>今天小憲和小光為了摘村口千層樹開滿的刷子花，決定來場爬樹比賽，於是他們到了樹下，正準備跳上樹幹時，突然被每棵樹的樹型所吸引…..</p><i class=\"fa fa-hand-o-right\"></i>請依提示對照出現場的白千層想要對你說什麼？<br><i class=\"fa fa-lightbulb-o\"></i>提示：<br>1.請背向文化牆面對白千層，並站在藍色指定位置找出答案。<br>2.每一欄(直排)為一個答案。<br><br><img src=\"./images/r1.png\" alt=\"白千層猜題\"><div class=\"asnbox\">請輸入通關密語：<input type=\"text\" id=\"pwtext\" name=\"pwtext\"><div id=\"showtext\"></div><button id=\"next_btn\" onclick=\"check_select02(01)\">送出</button><div style=\"clear: both;\"></div><br></div><button id=\"next_btn\" onclick=\"check_select(04)\">上一頁</button><div style=\"clear: both;\"></div>";
            break;
            case 06:
                document.getElementById("indextitle").style.display = "none";
                document.getElementById("s2box").innerHTML="<div class=\"kccenter\" id=\"kctitle\"><p>小憲爬上了樹摘下刷子花後，小憲和小光便想前往籃球場打籃球，走著走著忽然在地上看見了一張破掉的剪報，我們便撿起來看，發現它原來是篇報導採訪！<br>現在就請試著從村子裡所有的公告欄中，找尋它的另一半吧!</p><br><br><img src=\"./images/b2.png\" alt=\"報導採訪\"><br><img src=\"./images/map/map02.png\" alt=\"第二關地圖(中央廣場)\"><br><br><i class=\"fa fa-hand-o-right\"></i>請依照公告欄位置圖找出線索，請填入完整剪報中的所提的比賽英文縮寫。<div class=\"asnbox\">請輸入通關密語：<input type=\"text\" id=\"pwtext\" name=\"pwtext\"><div id=\"showtext\"></div><button id=\"next_btn\" onclick=\"check_select02(02)\">送出</button><button id=\"next_btn\" onclick=\"check_select(05)\">上一頁</button><div style=\"clear: both;\"></div>";
            break;
            case 07:
                document.getElementById("indextitle").style.display = "none";
                document.getElementById("s2box").innerHTML="<div class=\"kccenter\" id=\"kctitle\"><p>小憲和小光順利找到入口的公告欄，再仔細閱讀報導內容，才發現原來是村子某某家的女兒，代表國家代表隊出去比賽，獲得了亞洲杯第三名。<br><i class=\"fa fa-hand-o-right\"></i>請再仔細閱讀此篇報導，請問住在憲光的籃球國手正確名字為?</p><br><br><img src=\"./images/b2.png\" alt=\"報導採訪\"><br><img src=\"./images/map/map03.jpg\" alt=\"第三關地圖(中央廣場)\"><br><br><div class=\"asnbox\">請輸入通關密語：<input type=\"text\" id=\"pwtext\" name=\"pwtext\"><div id=\"showtext\"></div><button id=\"next_btn\" onclick=\"check_select02(03)\">送出</button><button id=\"next_btn\" onclick=\"check_select(06)\">上一頁</button><div style=\"clear: both;\"></div>";
            break;
            case 08:
                document.getElementById("indextitle").style.display = "none";
                document.getElementById("s2box").innerHTML="<div class=\"kccenter\" id=\"kctitle\"><p>小憲和小光驚訝的發現居然覃奶奶的女兒是位籃球國手，於是又開心地繼續前往村子籃球場，就在走到崔奶奶家的雜貨店時，看見王媽媽去店裡，手上拿著一疊眷補證，要來和崔奶奶換現金。<br><i class=\"fa fa-hand-o-right\"></i>請依圖示移動至71駐地工作站</p><br><br><img src=\"./images/map/map04.png\" alt=\"第四關地圖(71駐地工作站)\"><br><br><button id=\"next_btn\" onclick=\"check_select(09)\">下一頁</button><button id=\"next_btn\" onclick=\"check_select(07)\">上一頁</button><div style=\"clear: both;\"></div>";
            break;
            case 09:
                document.getElementById("indextitle").style.display = "none";
                document.getElementById("s2box").innerHTML="<div class=\"kccenter\" id=\"kctitle\"><p><i class=\"fa fa-hand-o-right\"></i>請幫忙算一算，若王媽媽將整個月全家的糧票都換成了現金，崔媽媽要拿給王媽媽多少錢呢?<br><i class=\"fa fa-lightbulb-o\"></i>提示：「中華民國退伍軍眷屬補給證」，簡稱「眷補証」，根據眷屬人口及年齡補給，一人一份，區分大口(十一歲以上)、中口(六至十歲)、及小口(一至五歲)三種，子女一旦畢業進入社會工作後，就不再補貼。眷補證內頁有當年度的糧票，按月兌換一定數量的米、食用油、麵粉……等生活必需品。請參照王媽媽家的全家照及糧票，算一算，若王媽媽將整個月全家的糧票都換成了現金，崔媽媽要拿給王媽媽多少錢呢?</p><br><br><img src=\"./images/b4.png\" alt=\"王媽全家照\"><img class=\"smallimg\" src=\"./images/b4-2.png\" alt=\"糧票\"><img class=\"smallimg\" src=\"./images/b4-3.png\" alt=\"沙拉油1L\"><img class=\"smallimg\" src=\"./images/b4-4.png\" alt=\"沙拉油2L\"><img class=\"smallimg\" src=\"./images/b4-5.png\" alt=\"5公斤米\"><img class=\"smallimg\" src=\"./images/b4-6.png\" alt=\"10公斤米\"><div class=\"asnbox\">請輸入通關密語：<input type=\"text\" id=\"pwtext\" name=\"pwtext\"><div id=\"showtext\"></div><button id=\"next_btn\" onclick=\"check_select02(04)\">送出</button><button id=\"next_btn\" onclick=\"check_select(08)\">上一頁</button><div style=\"clear: both;\"></div>";
            break;
            case 10:
                document.getElementById("indextitle").style.display = "none";
                document.getElementById("s2box").innerHTML="<div class=\"kccenter\" id=\"kctitle\"><p>這時我們看見自治會長龔爺爺正在寫春聯，原來是過年快到了，他想先寫幾幅春聯貼在自治會門口，不過這幅春聯和平常看到了不太一樣，只有一堆數字，龔爺爺說這是元宵時要大家猜的燈謎，只要答對了，就可到崔媽媽家的雜貨店，換小禮物喔!<br><i class=\"fa fa-hand-o-right\"></i>請依照春聯給的線索，找到猜謎答案。</p><br><br><img src=\"./images/r4.png\" alt=\"第五關\"><br><br><div class=\"asnbox\">請輸入通關密語：<input type=\"text\" id=\"pwtext\" name=\"pwtext\"><div id=\"showtext\"></div><button id=\"next_btn\" onclick=\"check_select02(05)\">送出</button><button id=\"next_btn\" onclick=\"check_select(09)\">上一頁</button><div style=\"clear: both;\"></div>";
            break;
            case 11:
                document.getElementById("indextitle").style.display = "none";
                document.getElementById("s2key").innerHTML="<div id=\"kcakey\"><img id=\"redbag\" src=\"./images/redbag.jpg\" alt=\"紅包袋\"></div><div class=\"kccenter kcw\"><p><i class=\"fa fa-sign-language\"></i>哇!你真是音樂神童，謝謝你(妳)幫小憲和小光猜出了燈謎解答。現在就可憑此頁面的解答音樂，至71號駐地工作站(雜貨店)，換取憲光小禮品喔!<i class=\"fa fa-sign-language hf\"></i></p><br><br><br><div id=\"kcauthor\">腳本設計-憲光二村駐地工作站<br>網頁製作-陳章瑋</div></div><p>";
                alert("現在就可憑此頁面的解答音樂，至71號駐地工作站(雜貨店)，換取憲光小禮品喔!");
            break;
            default:
                document.getElementById("s2box").innerHTML="指令錯誤!<br>請使用正確途徑使用網頁<br>如有錯誤請聯絡網頁管理員<br>(kchkd@hotmail.com)<br><input type =\"button\" onclick=\"javascript:window.location.reload()\" value=\"回到首頁\"></input>";
    }
                /*
                if(pwtext.value == "")
                {
                    document.getElementById("showtext").innerHTML="未輸入通關密語";
                }else if(pwtext.value == "籃球場旁的草叢"){
                    document.getElementById("showtext").innerHTML="通過";
                    document.getElementById("s2key").innerHTML="<div id=\"kcakey\"><img src=\"images/key.png\"></div><div class=\"kccenter kcw\"><i class=\"fa fa-sign-language\"></i>謝謝你幫小憲找到鑰匙囉!<i class=\"fa fa-sign-language hf\"></i><br><br><br><div id=\"kcauthor\">腳本設計-銘傳旅遊創新實驗社<br>網頁製作-陳章瑋</div></div>";
                    alert("謝謝你幫小憲找到鑰匙囉!");
                }else{
                    //alert("輸入錯誤");
                    document.getElementById("showtext").innerHTML="輸入錯誤";
                }*/
            }
function check_select02(n)
{
    switch(n)
    {
        case 01:
            if(pwtext.value == "")
            {
                document.getElementById("showtext").innerHTML="未輸入通關密語";
            }else if(pwtext.value == "就是愛憲光"){
                pwtext.value == "";
                document.getElementById("indextitle").style.display = "none";
                check_select(06);
            }else if(pwtext.value == "光愛就憲是"){
                document.getElementById("showtext").innerHTML="難道你不可以重組一下答案嗎?";
                pwtext.value == "";
            }else if(pwtext.value == "ccw"){
                document.getElementById("showtext").innerHTML="就是愛憲光";
                pwtext.value == "就是愛憲光";
            }else if(pwtext.value == "ccw09"){
                check_select(09);
            }else if(pwtext.value == "ccw11"){
                check_select(11);
            }else{
                //alert("輸入錯誤");
                document.getElementById("showtext").innerHTML="輸入錯誤";
            }
        break;
        case 02:
            if(pwtext.value == "")
                {
                    document.getElementById("showtext").innerHTML="未輸入通關密語";
                }else if(pwtext.value == "FIBA"){
                    document.getElementById("indextitle").style.display = "none";
                    check_select(07);
                }else if(pwtext.value == "ccw"){
                    document.getElementById("showtext").innerHTML="FIBA";
                    pwtext.value == "FIBA";
                }else{
                    //alert("輸入錯誤");
                    document.getElementById("showtext").innerHTML="輸入錯誤";
                }
        break;
        case 03:
            if(pwtext.value == "")
                {
                    document.getElementById("showtext").innerHTML="未輸入通關密語";
                }else if(pwtext.value == "覃素莉"){
                    document.getElementById("indextitle").style.display = "none";
                    check_select(08);
                }else if(pwtext.value == "ccw"){
                    document.getElementById("showtext").innerHTML="覃素莉";
                    pwtext.value == "覃素莉";
                }else{
                    //alert("輸入錯誤");
                    document.getElementById("showtext").innerHTML="輸入錯誤";
                }
        break;
        case 04:
            if(pwtext.value == "")
                {
                    document.getElementById("showtext").innerHTML="未輸入通關密語";
                }else if(pwtext.value == "260"){
                    document.getElementById("indextitle").style.display = "none";
                    check_select(10);
                }else if(pwtext.value == "ccw"){
                    document.getElementById("showtext").innerHTML="260";
                    pwtext.value == "260";
                }else{
                    //alert("輸入錯誤");
                    document.getElementById("showtext").innerHTML="輸入錯誤";
                }
        break;
        case 05:
            if(pwtext.value == "")
                {
                    document.getElementById("showtext").innerHTML="未輸入通關密語";
                }else if(pwtext.value == "恭喜發財"){
                    document.getElementById("indextitle").style.display = "none";
                    check_select(11);
                }else if(pwtext.value == "ccw"){
                    document.getElementById("showtext").innerHTML="恭喜發財";
                    pwtext.value == "恭喜發財";
                }else{
                    //alert("輸入錯誤");
                    document.getElementById("showtext").innerHTML="輸入錯誤";
                }
        break;
        default:
            document.getElementById("showtext").innerHTML="指令錯誤!<br>請使用正確途徑使用網頁<br>如有錯誤請聯絡網頁管理員<br>(kchkd@hotmail.com)<br><input type =\"button\" onclick=\"javascript:window.location.reload()\" value=\"回到首頁\"></input>";
    }
}
/*jQuery滑動到指定區塊*/
$(function(){
    $('#kcgototop').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 800);
    });
    $('#kctitletxt').click(function(){
        $('html,body').animate({scrollTop:$('#kctitle').offset().top}, 1500); }); //代表一個完整的執行區塊
});