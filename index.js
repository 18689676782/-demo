window.onload = function(){
	  var swiper = new Swiper('.swiper-container', {
      //slidesPerView: 1,
      //spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
          on:{
              init: function(){
                  swiperAnimateCache(this); //隐藏动画元素
                  swiperAnimate(this); //初始化完成开始动画
              },
              slideChangeTransitionEnd: function(){
                  swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                  //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
              }
          }
    });

    //点击导航跳转到指定位置
    // $(window).scroll(function(){
    //     if($(window).scrollTop() == 0){//
    //         $(".nav-item a").removeClass("active");
    //     }
    // });
    const jump = (idx,obj) => {
        $(".nav-item > a").eq(idx).click(()=>{
            $("html,body").animate({scrollTop: $(obj).offset().top},700);
            //$(".nav-item a").eq(idx).addClass("active").parent().siblings().find("a").removeClass("actice");
            $(".nav-item > a").removeClass("active");
            $(this).addClass("active");
        })
    }
    jump(1,".about-us");
    jump(2,".team");
    jump(3,".showcases");
    jump(4,".process");
    jump(5,".company");

    //向下滚动添加背景色的导航栏
    window.addEventListener("scroll",()=>{
        const nav = document.querySelector(".navbar");
        //滚轮一滑动就添加 sticky 类名为
        nav.classList.toggle("sticky",window.scrollY);
        //console.log("daad")
    });
   
    // var p = 0,t = 0;
    // $(window).scroll(function(e){
    //     p = $(this).scrollTop();
    //     if (t<= p){
    //         $(".navbar").slideDown(1000).addClass("sticky");
    //         //console.log("向下滚")
    //     }else{
    //         $(".navbar").slideUp(1000);
    //         //console.log("上")
    //     }
    //     setTimeout(function(){
    //         t = p;
    //     },0)
    // })
   

    //返回顶部
    $(window).scroll(function(){
        if($(window).scrollTop() >= 500){
            $(".returnTop").slideDown(400)
        }else{
            $(".returnTop").slideUp(400)
        }
    });
    $(".returnTop").click( ()=> {
        $("body,html").animate({"scrollTop": 0}, 700);
        return false;
    })
};
