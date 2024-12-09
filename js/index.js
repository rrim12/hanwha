$(function () {
    //헤더 햄버거바 애니메이션, 메뉴옆에서 나옴
    $(".bars").on("click", function () {
        $(".bar").toggleClass("wh_on");
        $(".up").toggleClass("on");
        $(".midd").toggleClass("on-m");
        $(".down").toggleClass("on-d");
        $(".ham_menu").toggleClass("side_on");
    });
    $(".bars").on("mouseenter", function () {
        $(".bar").addClass("bar_on");
    });
    $(".bars").on("mouseleave", function () {
        $(".bar").removeClass("bar_on");
    });

    //헤더 스크롤시 바뀜
    $(window).on("scroll", function () {
        $("header").addClass("colo_on");
        $(".bar").css({ "background-color": "#222" });
        $(".logo").hide();
        $(".logo_colo").show();
        $(".under_bar").css({ "background-color": "#222" });
    });

    //헤더 호버시 밑줄
    $(".main_menu li a").on("mouseenter", function () {
        $(this).children(".under_bar").addClass("under_on");
    });
    $(".main_menu li a").on("mouseleave", function () {
        $(this).children(".under_bar").removeClass("under_on");
    });
    $(".go_wrap a").on("mouseenter", function () {
        $(this).children(".under_bar").addClass("under_on");
    });
    $(".go_wrap a").on("mouseleave", function () {
        $(this).children(".under_bar").removeClass("under_on");
    });

    //헤더 예약 호버시 차오르는 색
    $(".reserv > a").on("mouseenter", function () {
        $(this).children(".circle").addClass("fill_up");
    });
    $(".reserv > a").on("mouseleave", function () {
        $(this).children(".circle").removeClass("fill_up");
    });
    $(".more_box").on("mouseenter", function () {
        $(this).children(".circle").addClass("fill_up");
    });
    $(".more_box").on("mouseleave", function () {
        $(this).children(".circle").removeClass("fill_up");
    });

    //리조트 그림 호버시 더보기 나오게
    $(".resort_park > li > a").on("mouseenter", function () {
        $(this).children(".resort_more").addClass("opci_on");
    });
    $(".resort_park > li > a").on("mouseleave", function () {
        $(this).children(".resort_more").removeClass("opci_on");
    });

    //스크롤탑 이동버튼
    $(".top_butt").on("click", function () {
        $("html, body").stop().animate({ scrollTop: "0" });
    });
});
