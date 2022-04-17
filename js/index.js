// 返回顶部
$(function () {
    $('.back').click(function (event) {
        event.preventDefault();
        $("html").stop().animate({ "scrollTop": 0 }, 1000)
    })


    $(window).scroll(function () {
        var scroll = $(window).scrollTop()
        // console.log(scroll)
        if (scroll > 320) {
            $('.back').fadeIn();

        } else {
            $('.back').fadeOut();
        }
        if (scroll > 300) {
            $(".menu-down").slideDown().find('.dropdown').css('top', '82px');
        } else {
            $(".menu-down").slideUp();
        }
    })

    //下拉菜单 
    $('.lag>a').click(function (event) {
        event.preventDefault();
        $(".dropdown_eng").slideToggle();
    })
    $('.money>a').click(function (event) {
        event.preventDefault();
        $(".dropdown_col").slideToggle();
    })

    // 下拉菜单（鼠标滑过，菜单下滑）

    $(".menu .col-md-6>ul>li ").hover(function () {
        $(this).find(".dropdown").stop().slideDown()
    }, function () {
        $(this).find(".dropdown").stop().slideUp()
    })


    //侧边栏
    $(".open").click(function (event) {
        event.preventDefault()
        $("html").css("overflow", "hidden");
        $(".mark").fadeIn();
        $(".back-sidebar").animate({ "right": 0 })
    })
    $(".close").click(function (event) {
        event.preventDefault()
        $(".mark").fadeOut();
        $(".back-sidebar").animate({ "right": -400 }, function () {
            $("html").css("overflow", "scroll")
        })
    })

    // search搜索栏
    $(".search-open").click(function (event) {
        event.preventDefault();
        $(".search").animate({ "left": -340 }).fadeIn()
        $(".search-close").show()
        $(this).css("display", "none")
    })
    $(".search-close").click(function (e) {
        e.preventDefault();
        $(".search").animate({ "left": -300 }).fadeOut()
        $(".search-open").show()
        $(this).css("display", "none")
    })

    //删除商品
    $(".del").click(function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    })

    // menu下划线
    $(".menu .col-md-6>ul>li>a").hover(function () {
        $(this).addClass("menu-active");
        $(this).removeClass("menu-noactive");
    }, function () {
        $(this).removeClass("menu-active");
        $(this).addClass("menu-noactive");
    })


    // 所有shop 的滑动

    // var newSpan = $("<a href='#' class='newShop'></a>")
    // $(".shop-btn").hover(function () {
    //     $(this).prepend(newSpan);
    //     $(newSpan).stop().animate({ width: '100%' }, 500).css('left', 0)
    // }, function () {
    //     $(newSpan).stop().animate({ width: '0' }, 500).css({ 'left': 'auto', 'right': '0' })

    // })

    //banner轮播图

    var ind = 0;
    var num = $(".item").length;

    $(".next,.prev").click(function (e) {
        e.preventDefault();
        ind = ind - 1
        if (ind < 0) {
            ind = num - 1
            console.log(ind)
        }
        $('.item').eq(ind).fadeIn().siblings().fadeOut()

    })


    $('.deal-bot > div').hover(function () {
        $(this).find(".cart").stop().animate({ "top": 270 }, 200)
    }, function () {
        $(this).find(".cart").stop().animate({ "top": 300 }, 200)
    })



    // 商品加减

    $('.minus').click(function () {
        var num = $(this).parent().find('.num').text() * 1
        if (num <= 0) {
            num = 0
            alert("商品数量不能为0")
        } else {
            scro = num - 1
            $(".num").text(scro)

        }
    })
    $(".add").click(function () {
        var num = $(this).parent().find('.num').text() * 1
        scro = num + 1
        $(".num").text(scro)
    })


    //登陆选项卡

    $("h2 .r").click(function (e) {
        e.preventDefault();
        $(".login").css("display", "none")
        $(".regest").css("display", "block")
    })
    $("h2 .l").click(function (e) {
        e.preventDefault();
        $(".regest").css("display", "none")
        $(".login").css("display", "block")
    })


})




