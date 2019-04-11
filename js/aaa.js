$(function(){
    
    $.ajax({
        type:"get",
        url:" https://www.easy-mock.com/mock/5c370b5df2375651600a21ce/meituan",
        success:function(res){
            var seller = res.seller;
            console.log(res)
            $(".noticeText").append(seller.bulletin)
            $(".headBg").attr("src",seller.avatar);
            $(".logo_bg").attr("src",seller.avatar);
            $(".headText").find("span").eq(0).append(seller.name)
            $(".headText").find("p").eq(0).append(seller.description+"/"+seller.deliveryTime+"分钟送达")
            $(".headText").find("span").eq(1).append(seller.supports[0].description+",满50减10")
            $(".msg_text").html(seller.bulletin)
            var oLi = "";
            var goods = res.goods;
            var oUl = "";
            var oList = "";
            var oMoney = "";
            // // 定义红色小块的值
            var count = 0;
            // console.log(goods.length)
            for(var i = 0;i<goods.length;i++){
                oList += "<li class='swiper-slide leftListSlide'>"+goods[i].name+"</li>";
            }
            $(".leftListWrapper").append(oList);
            // 给第一个给默认样式
            $(".leftList li").eq(0).addClass("active")
            // 右边食物部分
            for(var i = 0;i<goods.length;i++){          
                oUl +="<li class='bbbb swiper-slide' data-gid="+ i + ">";
                // $(".bbbb").attr("data-gid",i)
                oUl +="<div class='menu_title'>"+goods[i].name+"</div>";
                oUl +="<div class='menuFood'>";
                for(var j = 0;j<goods[i].foods.length;j++){
                    if(goods[i].foods[j].oldPrice==""){
                        oMoney="";
                    }else{
                        oMoney="<i>¥</i> ";
                    }
                    oUl +="<div class='foodBox' data-fid=" + j + "><div class='foodPart'><img src='"+goods[i].foods[j].image+"' class='foodHeadLogo'>"
                    oUl += "<div class='menu_body'><p class='menu_first_p'>"+goods[i].foods[j].name+"</p><p>"+goods[i].foods[j].description+"</p><p><span>月售"+goods[i].foods[j].sellCount+"份</span><span>好评率"
                    +goods[i].foods[j].rating+"%</span></p><div class='menuMoney'><span><i>¥</i><i class='newPrice'>"+goods[i].foods[j].price+"</i></span><span><del>"+oMoney+goods[i].foods[j].oldPrice+"</del></span></div></div><div class='numBox'><div class='icon-jian iconfont menuReduc'></div><input type='text' value='0' class='foodNum'/><div class='menuAdd iconfont icon-jia-'></div></div></div>"
                    oUl += "</div>";
                }   
                oUl += "</div>";
                oUl +="</li>";
            }
            $(".aaaa").html(oUl)      
            
            // []
            // 商家部分数据拼接
            oSeller = "";
            oSeller += "<div class='sellerTitleBox'><div class='sellerHead'><div class='sellerHeadLeft'><p>"+seller.name+"</p><div><img src='./images/star36_on@2x.png' ><img src='./images/star36_on@2x.png' ><img src='./images/star36_on@2x.png' ><img src='./images/star36_on@2x.png' ><img src='./images/star36_off@2x.png'><span>("+
            seller.sellCount+")</span><span>月销690单</span></div></div><div class='sellerHeadRight'><div class='iconfont icon-aixin11'></div><div>已收藏</div></div></div></div><div class='sellerMsg'><span><p>起送价</p><p><i>"+seller.minPrice+"</i>元</p></span><span><p>商家配送</p><p><i>"+seller.deliveryPrice+"</i>元</p></span><span><p>平均配送时间</p><p><i>"+
            seller.deliveryTime+"</i>分钟</p></span></div><div class='sellerBg'></div><div class='sellerNotice'><h4>公告与活动</h4><p>"+
            seller.bulletin+"</p></div>"
            oSeller +="<ul class='sellerList'>"
            for(var i = 0;i< seller.supports.length;i++){
                oSeller +="<li><span>"+seller.supports[i].description+"</span></li>"
            }
            oSeller +="</ul><div class='sellerBg'></div><div class='sellerView'><h4>商家实景</h4><div class='viewSwiper swiper-container'><div class='swiper-wrapper'>"
            for(var j = 0;j < seller.pics.length;j++){
                oSeller += "<div class='swiper-slide'><img src='"+seller.pics[j]+"'></div>"
            }
            oSeller +="</div></div></div>"
            oSeller +="<div class='sellerBg'></div>"
            oSeller +="<ul class='AddressList'>"
            for(var k = 0;k < seller.infos.length;k++){
                oSeller += "<li><span>"+seller.infos[k]+"</span></li>"
            }
            oSeller +="</ul>"
            $(".sellerBox").prepend(oSeller)
            // 评价部分数据拼接
            var oScore = "";
            var ratings = res.ratings;
            oScore +="<div class='score'><div class='leftScore'><p>"+seller.serviceScore+"</p><p>综合评分</p><p>高于周边商家"+
            seller.rankRate+"%</p></div><div class='rightScore'><div class='third_Score'><span>服务态度</span><img src='./images/star36_on@2x.png'><img src='./images/star36_on@2x.png'><img src='./images/star36_on@2x.png'><img src='./images/star36_on@2x.png'><img src='./images/star36_off@2x.png'><span>"+
            seller.serviceScore+"</span></div><div class='third_Score'><span>食物评分</span><img src='./images/star36_on@2x.png'><img src='./images/star36_on@2x.png'><img src='./images/star36_on@2x.png'><img src='./images/star36_on@2x.png'><img src='./images/star36_off@2x.png'><span>"+seller.foodScore+
            "</span></div><div class='third_Score'><span>送达时间</span><span>"+seller.deliveryTime+"分钟</span></div></div></div>"
            oScore +="<div class='scoreGap'></div><div class='scoreAss'><div class='scoreAssTop'><span>全部<i>57</i></span><span>满意<i>47</i></span><span>不满意<i>10</i></span></div><div class='scoreAssBot'><span class='iconfont icon-duigou'></span><span>只看有内容的评价</span></div></div>"
            oScore +="<div class='defs_box'>"
            for(var j = 0;j < ratings.length;j++){
                oScore +="<div class='defs'><img src='"+ratings[j].avatar+"' class='defsImg'><div class='defsCon'><p><span>"+ratings[j].username+"</span><span>2016-7-13 20:33</span></p><div><img src='./images/star36_on@2x.png'><img src='./images/star36_on@2x.png'><img src='./images/star36_on@2x.png'><img src='./images/star36_on@2x.png'><img src='./images/star36_off@2x.png'><span>"+ratings[j].deliveryTime
                +"分钟送达</span></div><p>"+ratings[j].text+"</p><div><i class='iconfont icon-dianzan_active defsZan'></i><span>大王香菇卤...</span><span>大王香菇卤...</span>        <span>大王香菇卤...</span>    </div></div></div>"
            }
            oScore +="</div>"
            $(".scoreBox").prepend(oScore);
            // 优惠页面拼接
            oDiscount = "";
            oDiscount += "<div class='storeTitle'><div class='stareHead'>"+seller.name+"</div><div class='stare'><img src='./images/star24_on@2x.png'><img src='./images/star24_on@2x.png'><img src='./images/star24_on@2x.png'><img src='./images/star24_on@2x.png'><img src='./images/star24_on@2x.png'></div></div>"
            oDiscount += "<div class='discount_msg'><div class='msg_head'><span></span><span>优惠信息</span><span></span></div>"
            oDiscount +="<ul class='msg_con'>"
             for(var i = 0;i< seller.supports.length;i++){
                oDiscount +="<li><span>"+seller.supports[i].description+"</span></li>"
            }
            oDiscount +="</ul><div class='msg_head'><span></span><span>商家公告</span><span></span></div><div class='msg_text'>"+seller.bulletin+"</div><div class='delete iconfont icon-chax'></div>"
            oDiscount += "</div>"
            $(".discount").prepend(oDiscount)

            // 单个页面详情数据拼接
            var oSingle = "";
            // for(var m = 0;m < goods.length;m++){
            //     for(var n = 0;n < goods[m].foods.length;n++){      
            // for(var i = 0;i < goods.length;i++){
            //     oSingle += "<div class='singleBoxUl'>"
            //     for(var n = 0;n < goods[i].foods.length;n++){    
            //         goods[i].foods[n].num = 0;
            //         oSingle += "<div class='singleBox'>"
            //         oSingle += "<img src='"+goods[i].foods[n].image+"' class='singleImg'><div class='singleHead'><p>"+
            //         goods[i].foods[n].name+"</p><p><span>月售"+goods[i].foods[n].sellCount+"份</span><span>好评率"+
            //         goods[i].foods[n].rating+"%</span></p><div class='singleCon'><div class='singleConTop'><span>¥<i>"+
            //         goods[i].foods[n].price+"</i></span><span><del>¥<i>"+goods[i].foods[n].oldPrice+"</i></del></span></div><div class='singleConBot'>加入购物车</div></div></div><div class='singleBg'></div>"
            //         oSingle += "<div class='singleInfos'><h4>商品介绍</h4><p>"+goods[i].foods[n].info+"</p></div><div class='singleBg'></div>"
            //         oSingle += "<div class='singleAss'><h4>商品评价</h4><div class='singleAssTop'><span>全部<i>57</i></span><span>满意<i>47</i></span><span>不满意<i>10</i></span></div><div class='singleAssBot'><span class='iconfont icon-duigou '></span><span>只看有内容的评价</span></div></div>"
            //         oSingle += "<ul class='singleList'>"
            //         for(var j=0;j<goods[i].foods[n].ratings.length;j++){
            //             oSingle += "<li><div class='singleFir'><div><span>2016-07-07</span><span>12:34</span></div><div><span>"+goods[i].foods[n].ratings[j].username+
            //             "</span><img src='"+goods[i].foods[n].ratings[j].avatar+"'></div></div><div class='singleSec'><span class='iconfont icon-cai'></span><span>"+goods[i].foods[n].ratings[j].text+"</span></div>"
            //             oSingle += "</li>"
            //         }
            //         oSingle += "</ul><div class='singleDel iconfont icon-clear-d7d8d9'></div></div>"
            //             }
            //             oSingle += "</div>"
            // }
            // $(".singleFood").html(oSingle);
                    
                    // console.log(goods[0].foods[0].image)
            //     }
                $(".foodBox").on("click",function(){ 
                    var num1 = parseInt($(this).attr("data-fid"))
                    var num2 = parseInt($(this).parent().parent().attr("data-gid"))
                    // 第一种 先全部显示 然后读数据
                    // $(".singleFood .singleBoxUl").eq(num2).show().siblings().hide()
                    // $(".singleFood .singleBoxUl").eq(num2).find(".singleBox").eq(num1).show().siblings().hide();
                    $(".singleFood").show();
                    $(".singleFood").find(".singleImg").attr("src",goods[num2].foods[num1].image)
                    $(".singleHead").children().eq(0).html(goods[num2].foods[num1].name);
                    $(".singleFood").append("<div class='singleDel iconfont icon-clear-d7d8d9'></div>")
                    // 第二种
                    $(".singleDel").on("click",function(){
                        $(".singleFood").hide()
                    })
                })
                   
            // }
            // 点击右边菜单每一个li弹出相应的商品介
            var aaa="";
           
            // $(".aaaa .foodBox").bind("click",function(){
            //     // console.log($(".aaaa").find(".foodBox"))
            //     console.log($(this).index())
            // })
            $(".singleDel").on("click",function(){
                $(".singleFood").hide()
            })

            // 点击改变背景颜色并且双向控制swiper
            $(".leftListWrapper").on("click","li",function(){
                $(this).toggleClass("active").siblings().removeClass("active");

            })
            // 点击5个出现商品优惠界面 首页加上高斯模糊
            $(".head_five").on("click",function(){
                $(".discount").show();
                $(".groble").css("filter","blur(0.1rem)");
            })
            $(".delete").on("click",function(){
                $(".discount").hide();
                $(".groble").css("filter","none");
            })
            // 点击购物车标志的时候弹出购物车
            $(".carFont").on("click",function(){
                $(".shoppingCard").toggle();
                $(".carList").slideToggle();
                // $(this).toggleClass("blue");
                // $(".carBtn").toggleClass("white");
                $("header").toggleClass("filterH");
                $(".con_box").children().not("footer").toggleClass("filterH");
                $(".con_box .content").eq(0).toggleClass("filterH");
                // 购物车轮播
                // 因为购物车部分是默认隐藏的 点击的时候才会出现
                //  才会计算他的高度 所以 swiper要放到 点击事件之后
            })
            // 点击清空购物车的时候
            // 所有商品消失
            $(".carDelete").on("click",function(){
                $(".carList").slideUp();
                $(".shoppingCard").toggle();
                $(".carFont").toggleClass("blue");
                $(".carBtn").toggleClass("white");
                $("header").toggleClass("filterH");
                $(".con_box").children().not("footer").toggleClass("filterH");
                $(".con_box .content").eq(0).toggleClass("filterH");
                // 清空的时候小红快消失
                $(".foodCarAfter").hide()
                // 点击清空的时候 ul里面的li全部删除
                $(".foodCarList").html("");
                // 去除foodCarList的之前设置的高 和超出部分滚动
                $(".foodCarList").removeClass("on")
                carLiNum=0;
                // 让减 和input影藏 并且归0
                $(".menuReduc").hide();
                $(".foodNum").hide();
                $(".foodNum").val(0)
                // console.log($(".foodNum").val())
                // 清空时改变个价格样式
                // $(".deliver").toggleClass("on")
                // $(".chaPrice").html("20元起送")
                // $(".priceAll").parent().toggleClass("on")
                // $(".priceAll").parent().html("¥0")
                allPrice=0;
                count=0;
                price()
            })
            // 给一个变量 当变量为4的时候 让列表滚动
            var carLiNum = 0;
            // 定义初始价格
            var newPrice = 0;
            var allPrice = 0;
            // 点击添加食物的时候 出现减和数字
            $(".menuAdd").on("click",function(event){
                event.stopPropagation();
                // 获取索引
                var listNum1 = parseInt($(this).attr("data-fid"))
                var listNum2 = parseInt($(this).parent().parent().attr("data-gid"))

                var n = $(this).prev().val();
                var num = parseInt(n)+1;
                if(num<10){
                    $(this).prev().css("paddingLeft","0.2rem")
                }else{
                    $(this).prev().css("paddingLeft","0.1rem")
                }
                if(num == 0){
                    return ;
                }else{
                    $(this).prev().val(num)
                }
                // 实时设置价格
                newPrice = parseInt($(this).parent().parent().find(".menuMoney .newPrice").html());
                allPrice +=newPrice;
                // console.log(newPrice)
                // console.log(allPrice)
                // console.log($(this).parent().parent().find(".menuMoney .newPrice").html())
                $(this).parent().find(".menuReduc").show();
                $(this).parent().find(".foodNum").show();
                // 点击加的时候红色小块出现
                count++;
                $(".foodCarAfter").show().html(count);
                $(".carFont").addClass("blue");
                $(".carBtn").addClass("white");
                // console.log($(this).index())
                // 点击添加到购物车的时候网购物车列表里面添加一个list
                // 拼接购物车详细列表
                var Ocarli = "";
                // console.log($(this).parent().parent().find(".menu_first_p").html())
                Ocarli += "<li class='carSlist'><div>"+$(this).parent().parent().find(".menu_first_p").html()+
                "</div><div><span>"+$(this).parent().parent().find(".menuMoney span").eq(0).html()+
                "</span><span class='icon-jiancopyx iconfont carReduce'></span><input type='text' value='1' class='carNum'><span class='icon-jia- iconfont carAdd'></span></div></li>"
                $(".foodCarList").append(Ocarli)
                // 点击的时候添加的列表的个数
                carLiNum++;
                // console.log(carLiNum);
                // 当数量大于4个的时候让给ul设置高度让其超出部分滚动
                if(carLiNum>4){
                    $(".foodCarList").addClass("on");
                }
                price();    
            })
               // 价格变化函数
               function price(){
                    // 在购物车底部显示价格
                    $(".priceAll").html(allPrice)
                    // 价格颜色发生变化
                    if(allPrice>0){
                        $(".priceAll").parent().addClass("on")
                    }else{
                        $(".priceAll").parent().removeClass("on")
                    }
                    // 右边差多少起送样式
                    if(allPrice<20){
                        $(".chaPrice").html("还差¥"+parseInt(20-allPrice)+"起送")
                        $(".deliver").removeClass("on")
                        $(".chaPrice").removeClass("on")
                    }else{
                        $(".deliver").addClass("on")
                        $(".chaPrice").addClass("on")
                        $(".chaPrice").html("去结算")
                    }
               }
                // 点击添加的按钮里面的 加减 改变input显示的值
                $(".foodCarList").on("click",".carAdd",function(){
                    var m = $(this).prev().val();
                    var jNum = parseInt(m)+1;
                    $(this).prev().val(jNum)
                })
                // 点击减少按钮的时候
                $(".foodCarList").on("click",".carReduce",function(){
                    var m = $(this).next().val();
                    var jNum = parseInt(m)-1;
                    $(this).next().val(jNum)
                    if(jNum<1){
                        $(this).parent().animate({opacity:0,paddingLeft:"+=80px"},500,function(){
                            $(this).parent().remove()
                        })
                    }
                    if(parseInt($(".foodCarList").children().length)<=5){
                        $(".foodCarList").removeClass("on")
                    }
                    if(parseInt($(".foodCarList").children().length)<=1){
                        $(".foodCarAfter").hide().html(count);
                        $(".carFont").removeClass("blue");
                        $(".carBtn").removeClass("white");
                        $(".chaPrice").html("还差¥"+parseInt(20)+"起送")
                        $(".deliver").removeClass("on")
                        $(".chaPrice").removeClass("on")
                        $(".priceAll").html(0)
                    }
                })
            // 点击减的时候
            $(".menuReduc").on("click",function(eve){
                eve.stopPropagation();
                var n = $(this).next().val();
                var num = parseInt(n)-1;
                if(num <= 0){
                    $(this).parent().find(".menuReduc").hide();
                    $(this).parent().find(".foodNum").hide();
                }else{
                    $(this).next().val(num)
                }
                count--;
                // 红色小块里面的数字
                $(".foodCarAfter").html(count);
                // 如果数量小于0 购物车样式还原
                if(count<=0){
                    $(".foodCarAfter").hide();
                    $(".carFont").removeClass("blue");
                    $(".carBtn").removeClass("white");
                }
                // $(this).parent().find(".menuReduc").show();
                // $(this).parent().find(".foodNum").show();
                // console.log($(this).index())
                // 实时设置价格
                newPrice = parseInt($(this).parent().parent().find(".menuMoney .newPrice").html());
                allPrice -=newPrice;
                price();
            })

            // 列表轮播部分
            // 左边食物列表轮播
            var leftList = new Swiper('.leftList', {
                direction : 'vertical',
                slidesPerView : 9,
                autoHeight: true, //高度随内容变化
                freeMove:true,
            })
            //给左边导航栏绑定一个点击事件
            $(".leftList li").on("click",function(){
                //获取当前的index 
                var index = $(this).index();
                menuList.slideTo(index);
            })
            // 右边食物详细轮播
            var menuList = new Swiper('.menuList', {
                direction : 'vertical',
                autoHeight: true, //高度随内容变化
                slidesPerView: 'auto',
                freeMode : true,
                // freeModeMomentum : false,
                // freeModeMomentumRatio : 5,
                onSlideChangeEnd:function(swiper){
                    $(".leftList li").eq(swiper.activeIndex).addClass("active").siblings().removeClass("active")
                    // alert(swiper.activeIndex);
                } 
            })
            // 商家图片轮播
            var viewSwiper = new Swiper('.viewSwiper', {
                direction : 'horizontal',
                autoHeight: true, //高度随内容变化
                slidesPerView: 3,
                freeMove:true,
            })
            // 点击商品导航栏
                viewSwiper.update()
                leftList.update();
                menuList.update();
            $(".nav li").on("click",function(){
                $(this).addClass("on").siblings().removeClass("on")
                $(".content").eq($(this).index()).show().siblings().hide();
                // 点击的时候更新swiper
                viewSwiper.update()
                leftList.update();
                menuList.update();
            })
        }
    })
    
})